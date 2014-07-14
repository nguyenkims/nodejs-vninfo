var app = angular.module('reminderApp', []);

app.controller('mainCtrl', function($scope, $http){
	$http.get("/api/reminder/list").success(function(data){
		$scope.reminderList = data;
	})

	$scope.create = function(re){
		$http.post("/api/reminder/create", re).success(function(data){
			$scope.reminderList = data;
		})		
	}
});
