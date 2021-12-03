const express = require('express');
const router = express.Router();
const braintree = require('braintree');

router.post('/', (req, res, next) => {
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId:   'cd8s96zvwrn2cghw',
    publicKey:    'p47mcfmh9h64kbdk', //encrypt this in prod.
    privateKey:   '478285a257218151a2ebb752eca42b27' //encrypt this in prod.
  });

  // Use the payment method nonce here
  const nonceFromTheClient = req.body.paymentMethodNonce;
  const customerFirstName = req.body.fname;
  const customerLastName = req.body.lname;
  //====MY CODE HERE=====
  //Create New Customer
  gateway.customer.create({
    firstName: customerFirstName,
    lastName: customerLastName
  }, (err, result) => {
    let newCustomerID = result.customer.id; // e.g. 494019
    if (result) {
      //Create Payment Method to Customer using credit card nonce From Test Values
      gateway.paymentMethod.create({
        customerId: newCustomerID,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          verifyCard: true
        }
      }, (err, result) => {
        if (result) {
          res.send(result);
        } else {
          console.log(err);
          res.send(err);
        }
      });
    }
  });

});

module.exports = router;