const Stock = require('../model/Stock');
const StockLog = require('../model/StockLog');
const moment = require('moment-timezone');
const Product = require('../model/product');
class StockManager {
    AccountId;
    UserId;
    constructor(AccountId,UserId) {
        this.AccountId = AccountId;
        this.UserId = UserId;
    }
    async decreaseStock( ProductId, quantity) {
        try {
            let stock = await Stock.findOne({where : {AccountId:this.AccountId, ProductId} });
            if (!stock) {
                stock = new Stock({
                    AccountId:this.AccountId,
                    ProductId,
                    CurrentStock: quantity * (-1),
                    MinimumStock: 0,
                    MaximumStock: 0
                });
            }

            const CurrentStock = stock.CurrentStock - quantity;
           

            stock.currentStock = CurrentStock;
            await stock.save();

            const stockLog = new StockLog({
                AccountId:this.AccountId,
                UserId:this.UserId, // Assuming no user information available for this transaction
                ProductId,
                CurrentStock,
                MinimumStock:stock.MinimumStock,
                MaximumStock:stock.MaximumStock,
                CreatedAt: moment().tz('Greenwich').format('YYYY-MM-DD HH:mm:ss'),
            });
            await stockLog.save();

            return stock;
        } catch (error) {
            throw error;
        }
    }
    async increaseStockByProductNameOrBarcode( ProductNameOrBarcode, quantity) {
        try {
            let product
            if (isNaN(ProductNameOrBarcode)) {
                product = await Product.findOne({where : {AccountId:this.AccountId, Name:ProductNameOrBarcode} });
            } else {
                product = await Product.findOne({where : {AccountId:this.AccountId, Barcode:ProductNameOrBarcode} });
            }
            if (!product) {
                throw new Error('Product not found');
            }
            return this.increaseStock(product.Id, quantity);
        } catch (error) {
            throw error;
        }
    }
    async decreaseStockByProductNameOrBarcode( ProductNameOrBarcode, quantity) {
        try {
            let product
            if (isNaN(ProductNameOrBarcode)) {
                product = await Product.findOne({where : {AccountId:this.AccountId, Name:ProductNameOrBarcode} });
            } else {
                product = await Product.findOne({where : {AccountId:this.AccountId, Barcode:ProductNameOrBarcode} });
            }       
            if (!product) {
                throw new Error('Product not found');
            }
            return this.decreaseStock(product.Id, quantity);
        } catch (error) {
            throw error;
        }
    }
    async increaseStock( ProductId, quantity) {
        try {
            let stock = await Stock.findOne({where : {AccountId:this.AccountId, ProductId} });
            if (!stock) {
                stock = new Stock({
                    AccountId:this.AccountId,
                    ProductId,
                    CurrentStock: quantity ,
                    MinimumStock: 0,
                    MaximumStock: 0
                });
            }

            const CurrentStock = stock.CurrentStock + quantity;
           

            stock.currentStock = CurrentStock;
            await stock.save();

            const stockLog = new StockLog({
                AccountId:this.AccountId,
                UserId:this.UserId, // Assuming no user information available for this transaction
                ProductId,
                CurrentStock,
                MinimumStock:stock.MinimumStock,
                MaximumStock:stock.MaximumStock,
                CreatedAt: moment().tz('Greenwich').format('YYYY-MM-DD HH:mm:ss'),
            });
            await stockLog.save();

            return stock;
        } catch (error) {
            throw error;
        }
    }

    async updateStock( ProductId, CurrentStock, MinimumStock, MaximumStock) {
        try {
            let stock = await Stock.findOne({ where: { AccountId:this.AccountId, ProductId} });
            if (!stock) {
                stock = new Stock({
                    AccountId:this.AccountId,
                    ProductId,
                    CurrentStock,
                    MinimumStock,
                    MaximumStock
                });
            } else {
                stock.CurrentStock = CurrentStock;
                stock.MinimumStock = MinimumStock;
                stock.MaximumStock = MaximumStock;
            }
            await stock.save();

            const stockLog = new StockLog({
                AccountId:this.AccountId,
                UserId:this.UserId, // Assuming no user information available for this transaction
                ProductId,
                CurrentStock,
                MinimumStock:stock.MinimumStock,
                MaximumStock:stock.MaximumStock,
                CreatedAt: moment().tz('Greenwich').format('YYYY-MM-DD HH:mm:ss'),
            });
            await stockLog.save();

            return stock;
        } catch (error) {
            throw error;
        }
    }

    async findStock(ProductId) {
        try {
            const stock = await Stock.findOne({ where: { AccountId:this.AccountId, ProductId} });
            return stock;
        } catch (error) {
            throw error;
        }
    }

    async bulkFindStock(ProductList) {
        try {
            const productIds = ProductList.map(product => product.ProductId);
            const stocks = await Stock.find({ where: { AccountId:this.AccountId, ProductId: { $in: productIds}}});
            return stocks;
        } catch (error) {
            throw error;
        }
    }

    async includeInBulk(ProductList) {
        try {
            const updatedProducts = [];

            for (const product of ProductList) {
               
                updatedProducts.push(this.updateStock( product.ProductId, product.CurrentStock, product.MinimumStock, product.MaximumStock));
            }

            Promise.all(updatedProducts)
                .then((values) => {
                    return values;
                })
                .catch((error) => {
                    throw error;
                });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = StockManager;