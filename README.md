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


The demo is ran inside a sandbox environment, the Demo will imitate the credit card verification process using the Braintree Drop-in UI. The project automated the creation of customer information by loading a user at random on each page load. Testing credit cards  values in the the Braintree developer documentation can be used for this demo. This demonstration can be done in two ways. 1) a successful card verification and settlement transaction, and 2) an unsuccessful card verification.

1. To see an unsuccessful card verification example. Fill up the form with the false card numbers and any valid expiry dates for failing verification from the developer documentation  The page will reload, and the error messages for a failed card verification will appear. You can use 4000111111111115 as an example.

or

2. To see a successful card verification. Fill a valid Card Number. You can use 4111111111111111 as an example, together with any valid expiry date. 


Click 'Submit Payment' and see the on-screen responses.
