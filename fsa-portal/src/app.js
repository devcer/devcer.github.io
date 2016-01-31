(function(){
	angular.module('ClubLeadModule',['angular.filter'])
	.controller('TableController',['$scope','$http',function($scope,$http){
		var dataStatus=$http.get('data/data.json');
		var mozillian=$http.get('https://mozillians.org/api/v2/users/?api-key=3cff67c8a1e7dcc6b0e4b2615a929fada118d8c5');
		dataStatus.success(function(data){
			$scope.data=data;
		});
		dataStatus.error(function(){
			console.log('AJAX error');
		});
		mozillian.success(function(data){
			var mozillians=data;
		})
		mozillian.error(function(){
			console.log('Error extracting mozillians data');
		})
		$scope.profile=function(record){
			$scope.record=record;
		};
	}]);
})();