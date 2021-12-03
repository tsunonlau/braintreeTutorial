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

To try out the demo, go to:

	URL http://braintree.billlau.link:3000/


The demo runs inside a sandbox environment. It imitates the credit card verification process using the Braintree Drop-in UI.  This demonstration runs in two ways. 1) a successful card verification and settlement transaction, and 2) an unsuccessful card verification. The simulation will automate the creation of customer information by loading a user at random each time the page is loaded. This information is used to keep track of customer payment method and use to run card verification. You can use test credit cards numbers from the Braintree developer documentation.

1. To see an unsuccessful card verification example. Fill up the form with the fake card numbers from the developer documentation. Type in any valid expiry date in and it must be a future month year The page will reload once send for payment, and the error messages for a failed card verification will appear. You can use 4000111111111115 as an example.

or

2. Unlike triggering a failure card verification, to see a successful card verification, fill in a valid Card Number. You can use 4111111111111111 as an example.


Click 'Submit Payment' and see the on-screen responses.
