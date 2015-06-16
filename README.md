# flickr-client


**How to run the project**

Install **httpster**.  This is used to serve out the files and is a simple alternative to node+express.

    npm install -g httpster

Install the dependencies

    npm install -g gulp
	npm install

Compile the scripts

    gulp build-dev
   
There is also `gulp build-release` for minified scripts for release 

Run the server

	httpster
Go to [http://localhost:3333/public/flickr-viewer.html](http://localhost:3333/public/flickr-viewer.html)

**How to run the tests**

Using Jasmine and Karma for unit tests.

    sudo npm install -g karma-cli    
    karma start