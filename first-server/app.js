const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Server </title></head>');
  res.write('<body><h1>Welcome Back<h1></body>');
  res.write('</html>');
  return res.end();
  
  }else if (req.url === '/products'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Server </title></head>');
  res.write('<body><h1>Welcome to Home<h1></body>');
  res.write('</html>');
   return res.end();
  }
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Server </title></head>');
  res.write('<body><h1>This is my server body<h1></body>');
  res.write('</html>');
  res.end();
  
});

const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`server running on address http://localhost:${PORT}`);
});