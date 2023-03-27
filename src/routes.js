const { Router } = require('express');
const ProductController = require('./Controllers/ProductController');
const ClientController = require('./Controllers/ClientController');
const PaymentController = require('./Controllers/PaymentController')

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: " server is on..." });
})

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/product/:id', ProductController.show);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.destroy);

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);
routes.get('/client/:id', ClientController.show);
routes.put('/client/:id', ClientController.update);
routes.delete('/client/:id', ClientController.destroy);

// routes.post('/pagamento', PaymentController.store);




module.exports = routes;

