var app = angular.module('GSKOnsite', ['ngResource', 'ngProgress', 'ngRoute']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

	$routeProvider.when('/dashboard',{

		controller:'OnSiteUserController',
		templateUrl:'views/onsite/dashboard.html'
	}).when('/upload',{
		controller:'OnUploadVideoController',
		templateUrl:'views/onsite/upload.html'
	}).when('/uploaded',{
		controller:'OnSiteUserController',
		templateUrl:'views/onsite/uploaded.html'
	}).when('/changepassword',{
		controller:'OnChangePassword',
		templateUrl:'views/headerfooter/changepassword.html'
	}).otherwise({ redirectTo: '/dashboard' });
///	$locationProvider.html5Mode(true).hashPrefix('!');

}]);

app.service('APIServices', function($http) {
    
	var result;
	this.getUsers=function(url){
    	result=$http.get(url)
    	.success(function(res){
    		restult=res;
    	}).error(function(){
    		
    	});
    	return result;
     };
     
     
     this.getUser=function(url){
     	result=$http.get(url)
     	.success(function(res){
     		restult=res;
     	}).error(function(){
     		
     	});
     	return result;
      };
    
    this.addUser=function(url,user){
    result=	$http.post(url,user)
      .success(function (response) {
    	 result=response;
      });
    return result;
	};
    
	
	 this.updateUser=function(url,user){
	    	result=$http.put(url,user)
	      .success(function (response) {
            result=response;
	      }).error(function(){
	    	  
	      });
	    	return result;
		};
	
	
    this.removeUser=function(url){
    	
    	result=$http.delete(url)
    	.success(function(res){
    		
    		result=res;
    	}).error(function(){
    		
    	});
    	return result;
    }
    

});
