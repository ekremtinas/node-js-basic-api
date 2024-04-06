const Product  = require('../model/product');
const { Op } = require('sequelize');
const moment = require('moment');
const Price = require('../model/price');


const searchByName = async (req, res) => {
    const { Name } = req.query;
    try {
      const products = await Product.findAll({
        where: {
          Name: {
            [Op.iLike]: `%${Name}%`, // Op.iLike, case-insensitive arama için kullanılır
          },
        },
      });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
const searchByNameOrBarcode = async (req, res) => {
    const { NameOrBarcode } = req.query;
    console.log(NameOrBarcode,"NameOrBarcode")
    try {
      const products = await Product.findAll({
        where: {
          [Op.or]: [ // Name veya Barcode'a göre arama yapılır
            {
              Name: {
                [Op.like]: `%${NameOrBarcode}%`, // Op.iLike, case-insensitive arama için kullanılır
              },
            },
            {
              Barcode: {
                [Op.like]: `%${NameOrBarcode}%`, // Op.iLike, case-insensitive arama için kullanılır
              },
            },
          ],

        },
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
const searchByBarcode = async (req, res) => {
    const { Barcode } = req.query;
    try {
      const products = await Product.findAll({
        where: {
          Barcode: {
            [Op.iLike]: `%${Barcode}%`, // Op.iLike, case-insensitive arama için kullanılır
          },
        },
      });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
const searchByDescription = async (req, res) => {
    const { Description } = req.query;
    try {
      const products = await Product.findAll({
        where: {
          Description: {
            [Op.iLike]: `%${Description}%`, // Op.iLike, case-insensitive arama için kullanılır
          },
        },
      });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  searchByNameOrBarcode,
  searchByName,
  searchByBarcode,
  searchByDescription
};