let express = require('express');
let hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');

//middlewares
app.use(express.static(__dirname + '/public'));
app.use((request, response, next) => {
	let now = new Date().toString();

	console.log(request);

	console.log(`${now}`);

	next();
});

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('get_current_year', () => new Date().getFullYear());

app.get('/', (request, response) => {
	response.render('home.hbs', {
		page_title : 'Home Page',
		welcome_message : 'Welcome to my website'
	});
});

app.get('/about', (request, response) => {
	response.render('about.hbs', {
		page_title : 'About Page'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});