/**
 * http://usejsdoc.org/
 */

var app = angular.module('GSKAdmin');



app.controller('AdminAddNewUserController',function($scope,$rootScope,sweet,APIServices,$location,$window){
	
	
	//console.log("inside User sesstion "+$rootScope.token);
	$rootScope.token=$window.sessionStorage.token;
	// Adding New User
	$scope.onAddNewUser=function(){
		APIServices.addUser("/api/users/",$scope.user).success(function (response) {
      		
	    	  var obj=response._id;
	       	 if(obj.length>0){
	       		
	       		   $location.path('/user');
	       		
	               }else{
	             	  $scope.error ="Sorry,Please try again !!!";
	               }
	      	 

	       }).error(function(){
	    	   
	    	   $scope.error='Sorry,User name already exist!!!';

		});

	};
	
	
	

	// Get All UserDetail
	$scope.onGetUsers=function(){
		var result=APIServices.getUsers("/api/users").success(function(res){
			$scope.users=[];
            $scope.users=res;
		});
	};
	
   
	
	
	
	
	$scope.onRemoveUser=function(id){
		
		sweet.show({
			 title: 'Confirm',
			   text: 'Are you sure to delete this user?',
			   type: 'warning',
			showCancelButton : true,
			confirmButtonColor : "#DD6B55",
			confirmButtonText : "Yes",
			cancelButtonText : "No",
			closeOnConfirm : false,
			closeOnCancel : true
        }, function(isConfirm) {
            if (isConfirm) {

            	APIServices.removeUser("/api/users/"+id)
                .success(function (response) {
                    sweet.show('Deleted!', 'successfully delete user', 'success');
                    
                    for( var i = 0; i < $scope.users.length; i++ ) {
                          if( $scope.users[i]._id === id ) {
                              id = i;
                              break;
                           }
                    };
                    
                    $scope.users.splice( id, 1 );
                
               });
            }
        });
		
    };
    
    
   $scope.onSetUserId=function(name,lid){
	 // $scope.FactoryData=id;
      	   $rootScope.id=lid;
      var url;	   
      if(name==="edit"){
    	  url='/user/edit';
      }else{
    	  url='/user/details';
      }
      
      $location.path(url);

   } 
    
// Get Single UserDetail
	$scope.onGetUser=function(){
      var id=$rootScope.id;
      APIServices.getUser("/api/users/"+id).success(function(res){
	         $scope.user=res;
		});
		
	};
	
	
	
//Update User Detail
   $scope.onUpdateUser=function(){
		var id=$rootScope.id;
		var result=APIServices.updateUser("/api/users/"+id,$scope.user).success(function(res){
      	   $location.path('/user');

		}).error(function(){
	    	   
	    	   $scope.error='Sorry,please try sometime';

		});
	}
}
);


