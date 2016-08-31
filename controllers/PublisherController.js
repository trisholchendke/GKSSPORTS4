/**
 * http://usejsdoc.org/
 * */
 
var restful=require('node-restful');
module.exports=function(app,route){
	
	//Setup
	var rest=restful.model(
			'publisher',
			app.models.UsersModel).methods(['get','post','put','delete'],function(req,res,next){
				
			});
	
	
//Register this endpoint with the application
	rest.register(app,route);
	//return middleware
	
	return function(req,res,next){
		next();
	};
	
	
};
