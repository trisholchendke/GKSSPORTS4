/**
 * http://usejsdoc.org/
 */

var app = angular.module('GSKAdmin');

app.controller('AdminPublisherController',function($rootScope,sweet,$scope,$location,APIServices){
	//Add new publisher
		$scope.onAddPublisher=function(){

		APIServices.addUser("api/publishers",$scope.publisher).success(function (response) {
      		
	    	  var obj=response._id;
	       	 if(obj.length>0){
	       		
	       		   $location.path('/publisher');
	       		
	               }else{
	             	  $scope.error ="Sorry,Please try again !!!";
	               }
	      	 

	       }).error(function(){
	    	   
	    	   $scope.error='Sorry,User name already exist!!!';

		});

	};
	
	// Get All PublisherDetail
	$scope.onGetPublishers=function(){
		var result=APIServices.getUsers("/api/publishers").success(function(res){
			console.log(res);
			$scope.publishers=[];
            $scope.publishers=res;
		});
	};
	

	   $scope.onSetUserId=function(name,lid){
		 // $scope.FactoryData=id;
	      	   $rootScope.id=lid;
	      var url;	   
	      if(name==="edit"){
	    	  url='/publisher/edit';
	      }else{
	    	  url='/publisher/details';
	      }
	      
	      $location.path(url);

	   } 
	    
	// Get Single UserDetail
		$scope.onGetUser=function(){
	      var id=$rootScope.id;
	      APIServices.getUser("/api/publishers/"+id).success(function(res){
		         $scope.publisher=res;
			});
			
		};
		
		
		
	//Update User Detail
	   $scope.onUpdateUser=function(){
			var id=$rootScope.id;
			var result=APIServices.updateUser("/api/publishers/"+id,$scope.publisher).success(function(res){
	      	   $location.path('/publisher');

			}).error(function(){
		    	   
		    	   $scope.error='Sorry,please try sometime';

			});
		}
	
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

            	APIServices.removeUser("/api/publishers/"+id)
                .success(function (response) {
                    sweet.show('Deleted!', 'successfully delete user', 'success');
                    
                    for( var i = 0; i < $scope.publishers.length; i++ ) {
                          if( $scope.publishers[i]._id === id ) {
                              id = i;
                              break;
                           }
                    };
                    
                    $scope.publishers.splice( id, 1 );
                
               });
            }
        });
		
    };
    
	
});