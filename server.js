let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer(function(request,response){
  let _url = url.parse(request.url).pathname;
  console.log(url.parse(request.url));
  let query = url.parse(request.url, true).query;
  console.log(query);

  if(_url == '/'){
    _url = '/index.html';
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + _url));
  //response.end(_url);

});
app.listen(3000);