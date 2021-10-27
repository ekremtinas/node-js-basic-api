const Contact = require('../model/contact');
const { Op } = require("sequelize");
module.exports.index = async function (req, res) {

    const contacts = await Contact.findAll({
        attributes: ['email', ['name', 'isim']],
        where: {
            [Op.or]: [
                { id: 1 },
                { email: 'rwetr' }
            ]
        }
    });
    console.log("All contacts:", JSON.stringify(contacts, null, 2));
    res.json(contacts);

};

module.exports.post = async function (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;
    let contactData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    const newContact = await Contact.build(contactData);
    await newContact.save();

    res.json('contact', contactData);
 
};
