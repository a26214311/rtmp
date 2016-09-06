var express = require('express');
var app = express();
var auth = {
    user: 'test1',
    pass: 'pwd',
    ticket: 'ABCDs2330gdws'
};

app.get('/auth/push', function (req, res) {
  var user = req.query.user;
  var pass = req.query.pass;
  console.log('user=', user, 'pass=', pass);
  if(user === auth.user && pass === auth.pass) {
    console.log('ok push user');
    res.send('passed');
  } else {
    console.log('bad push user');
    res.status(401).end();
  }
});


app.get('/auth/play', function(req, res){
  var ticket = req.query.ticket;
  console.log('ticket=', ticket);
  if(ticket === auth.ticket) {
     console.log('ok play user');
     res.send('allowed');
  } else {
     console.log('bad play user');
     res.status(401).end();
  }

});

var server = app.listen(9999, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app listening at http://%s:%s', host, port);
});
