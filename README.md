# braintreeTutorial

This is an example of Braintree Drop-in UI project

# Installation

The modules run in Sandbox mode and are designed to be run on a specific Cloud environment, or locally from the developer console. 

# Install node.js

	sudo yum install -y gcc-c++ make 
	curl -sL https://rpm.nodesource.com/setup_17.x | sudo -E bash - 
	sudo yum install -y nodejs

# Install git 

	sudo yum install -y git
  
  Download the git project to the environment

# Run web server using mp2 

	  npm install pm2 -g
	  pm2 start ./bin/www	


# Demo

	Visit URL http://braintree.billlau.link:3000/

The Demo will simulate the credit card verification process in a sandbox environment. The project automated the customer profile creation by randomly loading a user on page load. The Braintree Drop-in UI https://developer.paypal.com/braintree/docs/start/drop-in will take the testing credit card values from the developer documentation. There are two routes for this demo:


1. For testing unsuccessful card verification. Fill Form with the fake card numbers for unsuccessful verification from https://developer.paypal.com/braintree/docs/reference/general/testing/node#card-numbers-for-unsuccessful-verification and any valid expiry. For example 4000111111111115. The page will reload and show the error messages for an unsuccessful card verification.

2. For testing a successful card verification. Fill a valid Card Number: 4111 1111 1111 1111, and any valid expiry date. Click 'Submit Payment' and see the on-screen responses. A successful response will return the customer id.

  
