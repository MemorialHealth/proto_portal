var express = require('express')
    bodyParser = require('body-parser');

var app =  express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('main', { title: 'MHS Portal' });
});

app.get('/executive_summary', function(req, res){
    res.render('executive_summary', { title: 'MHS Portal' });
});

app.get('/survey/kpi_intro', function(req, res){
    res.render('kpi_intro.pug', { title: 'KPI Survey' } );
});

app.listen(port, function(){
    console.log('MHS Portal listening on port ' + port);
});