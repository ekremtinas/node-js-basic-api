const verify = require('../middleware/verify');

module.exports = function (app) {
    const contactRouter=require('./contactRouter');
    const authRouter=require('./authRouter');
    const productRouter=require('./productRouter');
    const searchRouter=require('./searchRouter');
    const customerRouter=require('./customerRouter');
    const transactionRouter=require('./transactionRouter');
    const invoiceRouter=require('./invoiceRouter');
    const paymentRouter=require('./paymentRouter');
    app.use('/auth',authRouter);
    app.use(verify);
    app.use('/contact',contactRouter);
    app.use('/product',productRouter);
    app.use('/search',searchRouter);
    app.use('/customer',customerRouter);
    app.use('/transaction',transactionRouter);
    app.use('/invoice',invoiceRouter);
    app.use('/payment',paymentRouter);
};
