const Customer  = require('../model/customer');
const { Op } = require('sequelize');
const moment = require('moment');

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create({
        ...req.body,
        AccountId:req.tokenDecoded.AccountId,
        CreatedAt:moment().format()
    });
  
   
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    let AccountId = req.tokenDecoded.AccountId;
    const customers = await Customer.findAll({
      where:{AccountId}     
    });
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomerById = async (req, res) => {
  const { CustomerId } = req.params;
  try {
    const customer = await Customer.findByPk(ProductId);
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCustomer = async (req, res) => {
  const { CustomerId } = req.params;
  try {
    const result = await Customer.update(req.body, {
      where: { Id: CustomerId,AccountId:req.tokenDecoded.AccountId },
      returning: true,
    });
  
   
      res.status(200).json({status:true, message: 'Customer updated',data:{ ProductId }});
   
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  const { CustomerId } = req.params;
  try {
    const deletedRowCount = await Customer.destroy({
      where: { Id: CustomerId , AccountId:req.tokenDecoded.AccountId},
    });
    if (deletedRowCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchCustomersByName = async (req, res) => {
    const { Name } = req.query;
    try {
      const customers = await Customer.findAll({
        where: {
          Name: {
            [Op.iLike]: `%${Name}%`, // Op.iLike, case-insensitive arama için kullanılır
          },
        },
      });
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
    searchCustomersByName,
};