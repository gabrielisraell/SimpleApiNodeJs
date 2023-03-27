// const pagarme = require('pagarme');


// class PaymentController {
//     async store(req, res) {
//         const client = await pagarme.client.connect({
//             api_ket: 'pk_test_XPl4p2SMXHVR69Gp',
//         });

//         const transaction = await client.transaction
//         .create(req.body)
//         .catch(function (e) {
//             return res.status(500).json(e.response.errors);
//         });
//         return res.status(200).json({ message: 'transaction successful', data: transaction });
//     }
// }

// module.exports = new PaymentController();

