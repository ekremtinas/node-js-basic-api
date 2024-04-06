const Product  = require('../model/product');
const { Op } = require('sequelize');
const moment = require('moment');
const Price = require('../model/price');
const Transaction = require('../model/transaction');
const Invoice = require('../model/invoice');
const Payment = require('../model/payment');
const sequelize = require('../config/database');

const savePayment = async (req, res) => {
  try {
       let InvoiceId = req.body.InvoiceId;
       let PaymentAmount = Number(req.body.PaymentAmount);
       
        let payment = await Payment.findOne({where:{InvoiceId}});
        let TotalAmount = Number(payment.TotalAmount);
        let PaidAmount = Number(payment.PaidAmount);
        let UnpaidAmount = Number(payment.UnpaidAmount);
        if(PaymentAmount > UnpaidAmount){
          return res.status(400).json({message:"Payment amount can not be greater than unpaid amount"});
        }
        PaidAmount = PaidAmount + PaymentAmount;
        UnpaidAmount = TotalAmount - PaidAmount;
        payment.PaidAmount = PaidAmount;
        payment.UnpaidAmount = UnpaidAmount;
        payment.UpdatedAt = moment().format();
        await payment.save();
        res.status(200).json(payment);
      
  
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  savePayment
};