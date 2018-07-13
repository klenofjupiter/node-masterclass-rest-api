// primary file for the API 

//dependency (built in in Node)

const http = require('http');
const url = require('url');

// the server should respond to all requests with a string

const server = http.createServer(function(req, res){
	//get the url and parse it 
  const parsedUrl = url.parse(req.url, true) // true calls the 'querystring' module

	// get the path from that URL

  const path = parsedUrl.pathname;  //just the "/home/users/me/hallup" part
  const trimmedPath = path.replace(/^\/+|\/+$/g,'') //trim slashes from either end (so that /foo/ and /foo are htthe same)

    //get the HTTP Method
  const method = req.method.toLowerCase();
	//send the response 
  res.end('hello world\n')
	//log what path the user was asking for 
  console.log('Request received on this path: '+ trimmedPath)

});

// start the server and have it listen on port 3000

server.listen(3000, () => {
	console.log('the server is listening on port 3000...\n')
})