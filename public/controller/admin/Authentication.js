/**
 * http://usejsdoc.org/
*/

 var app= angular.module('login',[]);

 app.controller('loginController', 
    function ($scope,$rootScope,$http,$window) {

      $scope.login=function(){
    	  
    	  
    	  /* Use this for real authentication
          ----------------------------------------------*/
         $http.get("/api/users?name="+$scope.username+"&&password="+$scope.password)
             .success(function (response) {
            	 var obj=response;
            	 console.log(obj[0]._id);
            	 if(obj.length>0){
          		   $window.sessionStorage.token =obj[0]._id ;

          		  //  window.location.href = '/admin.html';
               	   window.location.href = '/onsite.html';
            		 // response.render("./admin_dashboard.html");
                 }else{
               	  $scope.error ="Username or password is incorrect";
               	  $scope.username="";
               	  $scope.password="";
                 }

             });
  }});