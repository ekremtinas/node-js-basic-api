
const { Op } = require('sequelize');
const moment = require('moment');
const Transaction = require('../model/transaction');
const Invoice = require('../model/invoice');
const Customer = require('../model/customer');
const Payment = require('../model/payment');

const getInvoices = async (req, res) => {
  try {
    let AccountId = req.tokenDecoded.AccountId;
    let DateFrom = !!req.body.DateFrom ? moment(req.body.DateFrom).set({ hour: 0, minute: 0 }):undefined;
    let DateTo = !!req.body.DateTo ? moment(req.body.DateTo).set({ hour: 23, minute: 59 }):undefined;
    let where = req.body.CustomerId==undefined ? {
    }:{
      CustomerId:req.body?.CustomerId
    };
    console.log(where)
    where = DateFrom==undefined ? where:{
      ...where,
      InvoiceDate:{
        [Op.gte]: DateFrom
      }
    }
    where = DateTo==undefined ? where:{
      ...where,
      InvoiceDate:{
        [Op.lte]: DateTo
      }
    }

    where = DateFrom==undefined && DateTo==undefined ? where:{
      ...where,
      InvoiceDate:{
        [Op.between]: [DateFrom, DateTo]
      }
    }
    const invoices = await Invoice.findAll({
      where:{
        AccountId,
        ...where
      },
      include: [{
        model: Transaction,
        required: true, // Fiyatı olmayan ürünleri getirmemek için true yapılır
     },
      {
        model: Customer,
        required: false, // Fiyatı olmayan ürünleri getirmemek için true yapılır
      }
    ]
    });
    res.status(200).json({
      message:"Invoices fetched successfully",
      data:invoices
    });
   
      
  
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUnpaidInvoices = async (req, res) => {
  try {
    let AccountId = req.tokenDecoded.AccountId;
    let DateFrom = !!req.body.DateFrom ? moment(req.body.DateFrom).set({ hour: 0, minute: 0 }):undefined;
    let DateTo = !!req.body.DateTo ? moment(req.body.DateTo).set({ hour: 23, minute: 59 }):undefined;
    let where = req.body.CustomerId==undefined ? {
    }:{
      CustomerId:req.body?.CustomerId
    };
    where = DateFrom==undefined ? where:{
      ...where,
      InvoiceDate:{
        [Op.gte]: DateFrom
      }
    }
    where = DateTo==undefined ? where:{
      ...where,
      InvoiceDate:{
        [Op.lte]: DateTo
      }
    }

    where = DateFrom==undefined && DateTo==undefined ? where:{
      ...where,
      InvoiceDate:{
        [Op.between]: [DateFrom, DateTo]
      }
    }
    const invoices = await Invoice.findAll({
      where:{
        AccountId,
        ...where,
        [Op.or]: [
          {
            '$payments.UnpaidAmount$': {
              [Op.not]: 0
            }
          },
          {
            '$payments.Id$': null
          }
        ]
      },
      include: [{
        model: Transaction,
        required: true, // Fiyatı olmayan ürünleri getirmemek için true yapılır
     },
      {
        model: Customer,
        required: false, // Fiyatı olmayan ürünleri getirmemek için true yapılır
      },
      {
        model: Payment,
        required: false, // Fiyatı olmayan ürünleri getirmemek için true yapılır
        where:{
          AccountId
        }
      }
    ]
    });
    res.status(200).json({
      message:"Unpaid Invoices fetched successfully",
      data:invoices
    });
   
      
  
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getInvoices,
  getUnpaidInvoices
};