var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

app.use(express.static('assets'));

app.use('/assets', express.static(__dirname + '/assets'));

if (process.env.PORT) {
    console.log('Usando puerto del proceso...');
} else {
    console.log('Usando valor directo...');
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Escuchando en el puerto: ${port} ...`));