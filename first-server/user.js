const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Server form </title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder=" Enter Your Name:">  <br>');
    res.write('<label for="male"> Male</label> ');
    res.write('<input type="radio" name="gender" value="male"/> ');
    res.write('<label for="female"> Female</label> ');
    res.write('<input type="radio" name="gender" value="female"/> <br> ');
    res.write('<input type="submit" value="submit"> ');
    res.write('</form>');
    res.write('</body></html>');
    return res.end();
  } 
  
  else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
    let body = '';

    // collect data
    req.on('data', chunk => {
      console.log(chunk);
      body += chunk.toString();
    });

    // when data fully received
    req.on('end', () => {
      console.log('Form Data:', body);  // raw form data
      const params = new URLSearchParams(body);
      // const bodyObject = {};
      // for (const [key, value] of params.entries()){
      //   bodyObject[key] = value;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      // save form data to file
      fs.writeFileSync('user.txt', JSON.stringify(body), err => {
        if (err) {
          console.error('Error writing file:', err);
        }
        // redirect back to homepage
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      });
    });

    return;
  }

  // fallback
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Server </title></head>');
  res.write('<body><h1>This is my server body</h1></body>');
  res.write('</html>');
  res.end();

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
