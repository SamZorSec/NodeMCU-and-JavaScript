/*
  A simple example to control the built-in LED
  over a HTML web page
  http://espruino.local:8080
*/

var wifi = require('Wifi');
var http = require('http');

var led = NodeMCU.D4;

// connect to the Wi-Fi AP with the informations
// provided in example 03_wifi.js, saved with wifi.save()
wifi.restore();
wifi.setHostname('espruino');

http.createServer(function(req, res) {
  switch(req.method) {
    case 'GET':
      switch(req.url) {
        case '':
        case '/':
          res.writeHead(200);
          res.write('<html>');
          res.write('  <head>');
          res.write('    <title>LED Control</title>');
          res.write('  </head>');
          res.write('  <body>');
          res.write('    <h1>Control the built-in LED</h1>');
          res.write('    <form action="/led/on" method="POST">');
          res.write('      <button type="submit">Turn on</button>');
          res.write('    </form>');
          res.write('    <form action="/led/off" method="POST">');
          res.write('      <button type="submit">Turn off</button>');
          res.write('    </form>');
          res.write('  </body>');
          res.write('</html>');
          break;
        default:
          console.log('INFO: URL not handled, ' + req.url);
          res.writeHead(404);
          break;
      }
      break;
    case 'POST':
      switch(req.url) {
        case '/led/on':
          console.log('INFO: Turn on the LED');
          digitalWrite(led, LOW);
          res.writeHead(200);
          res.write('<html>');
          res.write('  <head>');
          res.write('    <title>LED Control</title>');
          res.write('  </head>');
          res.write('  <body>');
          res.write('    <a href="/">Back</a>');
          res.write('  </body>');
          res.write('</html>');
          break;
        case '/led/off':
          console.log('INFO: Turn off the LED');
          digitalWrite(led, HIGH);
          res.writeHead(200);
          res.write('<html>');
          res.write('  <head>');
          res.write('    <title>LED Control</title>');
          res.write('  </head>');
          res.write('  <body>');
          res.write('    <a href="/">Back</a>');
          res.write('  </body>');
          res.write('</html>');
          break;
        default:
          console.log('INFO: URL not handled, ' + req.url);
          res.writeHead(404);
          break;
      }
      break;
    default:
      console.log('INFO: Method not handled, ' + req.method);
      res.writeHead(405);
      break;
  }
  res.end();
}).listen(8080);
