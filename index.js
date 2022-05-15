const express = require('express');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const favicon = require('serve-favicon');

const PORT = process.env.PORT || 3000;

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(partials());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}) 

app.get('/', (req, res) => {
    res.render('home')
});

