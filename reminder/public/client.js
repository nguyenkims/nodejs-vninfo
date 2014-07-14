var app = angular.module('reminderApp', []);

app.controller('mainCtrl', function($scope, $http){
	var nbMilisecsInOneMinute = 60 * 1000;

	$http.get("/api/reminder/list").success(function(data){
		$scope.reminderList = data;
	})

	$scope.create = function(toCreate){
		var milliSecs = new Date().getTime() + nbMilisecsInOneMinute * toCreate.nbMins;
		toCreate.time = new Date(milliSecs);
		$http.post("/api/reminder/create", toCreate).success(function(data){
			$scope.reminderList = data;
		})		
	};

	$scope.getMinuteDiff = function(time){
		var t = new Date(time);
		var now = new Date();
		
		return (t.getTime() - now.getTime()) / nbMilisecsInOneMinute; 
	}
});
