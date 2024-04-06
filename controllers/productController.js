const Product  = require('../model/product');
const { Op } = require('sequelize');
const moment = require('moment');
const Price = require('../model/price');

const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
        ...req.body,
        AccountId:req.tokenDecoded.AccountId,
        CreatedAt:moment().format()
    });
  
    const price = await Price.create({
        AccountId:req.tokenDecoded.AccountId,
        ProductId:product.Id,
        GrossPrice:0,
        PurchasePrice:0,
        NetPrice:Number(req.body.NetPrice),
        Date:moment().format(),
        CreatedAt:moment().format()
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    let AccountId = req.tokenDecoded.AccountId;
    const products = await Product.findAll({
      where:{AccountId},
      include: [{
        model: Price,
        required: true, // Fiyatı olmayan ürünleri getirmemek için true yapılır
     }]
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { ProductId } = req.params;
  try {
    const product = await Product.findByPk(ProductId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { ProductId } = req.params;
  try {
    const result = await Product.update(req.body, {
      where: { Id: ProductId,AccountId:req.tokenDecoded.AccountId },
      returning: true,
    });
    let resultPrice = await Price.update({NetPrice:Number(req.body.NetPrice)}, {
      where: { ProductId: ProductId,AccountId:req.tokenDecoded.AccountId },
      returning: true,
    });
   
      res.status(200).json({status:true, message: 'Product updated',data:{ ProductId }});
   
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { ProductId } = req.params;
  try {
    const deletedRowCount = await Product.destroy({
      where: { Id: ProductId , AccountId:req.tokenDecoded.AccountId},
    });
    if (deletedRowCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};