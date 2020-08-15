const { say,echo ,read_file} = require('../pkg/ssvm_nodejs_starter_lib.js');

console.log(read_file("/sensitive-words.txt"));

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  if (queryObject['name']) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end(say(queryObject['name']) + '\n');
  } else if(queryObject['sentence']){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end(echo(queryObject['sentence']) + '\n');
  }else if(url.endsWith('sensitive-words')){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end(read_file("/sensitive-words.txt") + '\n');
  }else {
    res.end(`Please use command curl http://${hostname}:${port}/?name=MyName or curl http://${hostname}:${port}/?sentence=MySentence\n`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
