/**
 * http://usejsdoc.org/
 */

var app = angular.module('GSKOnsite');

app.controller('OnSiteUserController',function($window,$scope,$location,APIServices){
	
	// Get user uploadedVieo
		$scope.onGetUploadedVideo=function(){
	      var id=$window.sessionStorage.token;
	      console.log("ID"+id);
	      APIServices.getUser("/api/onsite/?onsite_user="+id).success(function(res){
	    	  
		         $scope.userVideo=[];
		         $scope.userVideo=res;
		         console.log($scope.userVideo);
			});
			
		};
		
		
		//Get Recent Video Uploaded
		$scope.onGetRecentUploadVideo=function(){
			 var id=$window.sessionStorage.token;
		      APIServices.getUser("/api/onsite/?onsite_user="+id).success(function(res){
		    	  
			         $scope.userVideo=[];
			         $scope.userVideo=res;
			         $scope.totalUploadCount=res.length;
			         console.log( $scope.userVideo);
				});
				
			}
	
		
});

			
		