const { say,echo } = require('../pkg/ssvm_nodejs_starter_lib.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  if (queryObject['name']) {
    res.end(say(queryObject['name']) + '\n');
  } else if(queryObject['sentence']){
    res.end(echo(queryObject['sentence']) + '\n');
  }else {
    res.end(`Please use command curl http://${hostname}:${port}/?name=MyName or curl http://${hostname}:${port}/?sentence=MySentence\n`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
