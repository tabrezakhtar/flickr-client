# flickr-client


**How to run the project**

Install the dependencies

    npm install -g gulp
	npm install 

Compile the scripts

    gulp build-dev
   
There is also `gulp build-release` for minified scripts for release 

Run the server

	node server
Go to [http://localhost:3333](http://localhost:3333)

**How to run the tests**

Using Jasmine and Karma for unit tests.

    sudo npm install -g karma-cli    
    karma start