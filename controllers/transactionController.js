const Product  = require('../model/product');
const { Op } = require('sequelize');
const moment = require('moment');
const Price = require('../model/price');
const Transaction = require('../model/transaction');
const Invoice = require('../model/invoice');
const Payment = require('../model/payment');
const sequelize = require('../config/database');

const createTransaction = async (req, res) => {
  try {
        let year = moment().format('YYYY');
        console.log(req.body)
        let Products = req.body.Products;
        let PaymentType = Number(req.body.PaymentType); 
        let InvoiceAmount = Products.reduce((acc, product) => acc + Number(product.NetPrice), 0);
        let InvoiceNumber = await Invoice.max("InvoiceNumber");
        InvoiceNumber = !! InvoiceNumber ? Number(InvoiceNumber)  + 1 : `${year}000001`;
        let BookCode = 200;
        let CashRegisterId = 1;
        Invoice.create({
          AccountId:req.tokenDecoded.AccountId,
          InvoiceNumber,
          InvoiceAmount,
          BookCode,//200 Satış Faturası
          CustomerId:req.body.CustomerId,
          InvoiceDate:moment().format(),
          CreatedAt:moment().format()
        }).then((invoice) => {
          Products = Products.map((product) => {
            return {
              InvoiceId:invoice.Id,
              ProductId:product.Id,
              UserId:req.tokenDecoded.UserId,
              ProductName:product.Name,
              Description:product.Description,
              // VAT:!!product?.VAT ? product.VAT : 0,
              // VATCode:!!product?.VATCode ? product.VATCode : 0,
              // LedgerCode:!!product?.LedgerCode ? product.LedgerCode : null,
              Quantity:product.Quantity,
              NetPrice:product.NetPrice,
              CustomerId:req.body.CustomerId,
              AccountId:req.tokenDecoded.AccountId,
              CashRegisterId,
              CreatedAt:moment().format()
            }
          });
          Transaction.bulkCreate(Products)
          .then(async(result) => {
          Payment.create({
              AccountId:req.tokenDecoded.AccountId,
              InvoiceId:invoice.Id,
              InvoiceNumber,
              BookCode,//200 Satış Faturası
              TotalAmount:InvoiceAmount,
              PaidAmount: PaymentType==1 ? InvoiceAmount:0,
              UnpaidAmount: PaymentType==2 ? InvoiceAmount:0,
              CustomerId:req.body.CustomerId,
              CreatedAt:moment().format()
            })
            .then(async(result) => {
              
              
              res.status(201).json({
                status:true,
                message: 'Transaction created successfully',
                data: result,
              });
            });
          })
        })
      .catch(async(error) => {
        console.error('Transaction failed:', error);
        await t.commit();
      });
    
   
      
  
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  createTransaction
};