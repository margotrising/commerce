const cCtrl = require('../controllers/commerceCtrl');

module.exports = function(app){
    app.get('/api/products', cCtrl.allProducts);
    app.post('/api/products/new', cCtrl.create);
    app.put('/api/products/:id/edit', cCtrl.update);
    app.delete('/api/products/:id', cCtrl.delete);
    app.get('/api/products/:id', cCtrl.getOne);
}