const express = require('express');
const os = require('os')

var  app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {

var headerOS = req.headers['user-agent'];
var start = headerOS.indexOf('(') + 1;
var end = headerOS.indexOf(')');
var system = headerOS.substring(start, end);


var ip = req.headers['x-forwarded-for'] ||
req.connection.remoteAddress ||
req.socket.remoteAddress ||
req.connection.socket.remoteAddress;


res.send({




  "ip-address": ip,
  "language": req.headers['accept-language'].split(',')[0],
  "software": system
});


});


app.listen(app.get('port'), () => {
  console.log('Server has started ')
})
