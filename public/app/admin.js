var app = angular.module('GSKAdmin', ['ngResource', 'ngProgress', 'ngAnimate', 'toaster','ngRoute','hSweetAlert']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	
	$routeProvider.when('/dashboard',{

		controller:'AdminAddNewUserController',
		templateUrl:'views/admin/user/admin_dashboard.html'
	}).when('/user',{
		controller:'AdminAddNewUserController',
		templateUrl:'views/admin/user/admin_user_management.html'
	}).when("/user/add",{
        controller:'AdminAddNewUserController',
		templateUrl:'views/admin/user/admin_add_user_details.html'
	}).when('/user/edit',{
		controller:'AdminAddNewUserController',
		templateUrl:'views/admin/user/admin_edit_user_details.html'
	}).when('/user/details',{
		controller:'AdminAddNewUserController',
		templateUrl:'views/admin/user/admin_user_details.html'
	}).when('/publisher',{
		controller:'AdminPublisherController',
		templateUrl:'views/admin/publisher/user_management.html'
	}).when('/publisher/add',{
		controller:'AdminPublisherController',
		templateUrl:'views/admin/publisher/user_add_details.html'
	}).when('/publisher/edit',{
		controller:'AdminPublisherController',
		templateUrl:'views/admin/publisher/user_edit_details.html'
	}).when('/publisher/details',{
		controller:'AdminPublisherController',
		templateUrl:'views/admin/publisher/user_details.html'
	}).otherwise({ redirectTo: '/dashboard' });
	$locationProvider.html5Mode(true).hashPrefix('!');
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
