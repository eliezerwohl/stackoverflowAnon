module.exports = function(app, path, express){
	app.use(express.static(__dirname + "/public"));
	app.use(function(request, response, next){
	  response.sendFile(process.cwd() + "/public/home.html");
	})
	app.listen(9000, function(){
	  console.log('connected on 9000')
	})
}