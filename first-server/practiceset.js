const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/home') {
    res.write('<h1>Welcome to Home</h1>');
    return res.end();
  }
  if (req.url === '/men') {
    res.write('<h1>Welcome to Men</h1>');
    return res.end();
  }
  if (req.url === '/women') {
    res.write('<h1>Welcome to Women</h1>');
    return res.end();
  }
  if (req.url === '/kids') {
    res.write('<h1>Welcome to Kids</h1>');
    return res.end();
  }
  if (req.url === '/cart') {
    res.write('<h1>Welcome to Cart</h1>');
    return res.end();
  }

  // default page
  res.write(`
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Myntra</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/men">Men</a></li>
              <li><a href="/women">Women</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </nav>
        </header>
      </body>
    </html>
  `);
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
