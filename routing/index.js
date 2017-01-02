module.exports = function(app, path, express){
	app.use(function(request, response, next){
	  response.sendFile(process.cwd() + "/public/home.html");
	})

}
