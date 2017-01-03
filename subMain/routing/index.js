module.exports = function(app, path, express){
	app.use(express.static(__dirname + "/public"));
	app.use(function(request, response, next){
	  response.sendFile(process.cwd() + "/subMain/public/home.html");
	})

}
