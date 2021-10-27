module.exports = function (app) {
    const routeContact=require('./contactRouter');
    app.use('/contact',routeContact);
};
