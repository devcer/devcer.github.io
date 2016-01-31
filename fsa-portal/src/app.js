(function(){
	angular.module('ClubLeadModule',['angular.filter'])
	.controller('TableController',['$scope','$http',function($scope,$http){
		var dataStatus=$http.get('data/data.json');
		dataStatus.success(function(data){
			$scope.data=data;
		});
		dataStatus.error(function(){
			console.log('AJAX error');
		});
	}]);
})();