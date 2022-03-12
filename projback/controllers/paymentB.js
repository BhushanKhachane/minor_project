// const braintree = require("braintree");

// const gateway = new braintree.BraintreeGateway({
//   environment: braintree.Environment.Sandbox,
//   merchantId: "23p45k93xq5q99zc",
//   publicKey: "g9wzn3q8xhzzyfr6",
//   privateKey: "795d3dcc183dfbd3c4d53f2fcda7c130"
// });

// exports.getToken = (req, res) => {
//     gateway.clientToken.generate({}, function(err, response) {
//         if (err) {
//             res.status(500).send(err)
//         } else {
//             res.send(response)
//         }
//       });
// }

// exports.processPayment = (req, res) => {
//     let nonceFromTheClient = req.body.paymentMethodNonce;
  
//     let amountFromTheClient = req.body.amount;
//     gateway.transaction.sale(
//       {
//         amount: amountFromTheClient,
//         paymentMethodNonce: nonceFromTheClient,
  
//         options: {
//           submitForSettlement: true
//         }
//       },
//       function(error, result) {
//         if (error) {
//                 const clientToken = info.clientToken
//                 res.status(500).json(error);
//         } else {
//           res.json(result);
//         }
//       }
//     );
//   };
  