const http = require('http');
const path = require('path');
const url = require('url');
const port = process.argv[2];

if(!port){
  console.log('请运行node server.js 8888')
  process.exit(1)
}


const server = http.createServer((request, response) => {
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0) { 
    queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) 
  }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  if(path === '/'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css"/>
      </head>
      <body>
        <h1>hello world</h1>
      </body>
    </html>`)
    response.end()
  } else if (path === "/style.css") {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`h1 {color: red;}`)
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你访问的页面不存在`) 
  }
    
})

server.listen(8888);
