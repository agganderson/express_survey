var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(request, response){
	response.render('index');
});

app.post('/result', function(request, response){
	var users = [
		{name : request.body.name, 
		location : request.body.location, 
		language : request.body.language,
		comment : request.body.comment
		}
	];
	response.render('result', {user : users});
});

app.listen(8000, function(){
	console.log("Listening on port 8000");
});