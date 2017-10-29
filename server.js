const express = require('express');
const os = require('os')

var  app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {

var headerOS = req.headers['user-agent'];
var start = headerOS.indexOf('(') + 1;
var end = headerOS.indexOf(')');
var system = headerOS.substring(start, end);

res.send({




  "ip-address": os.networkInterfaces().lo0[0].address,
  "language": req.headers['accept-language'].split(',')[0],
  "software": system
});


});


app.listen(app.get('port'), () => {
  console.log('Server has started ')
})
