
 var mainApp = angular.module("mainApp", ['ngRoute']);
 mainApp.config(function($routeProvider){
	$routeProvider
	.when("/story/:a",{
		templateUrl:"story-detail.html",
		controller:"storyController"
	})
  .when("/",{
		templateUrl:"home.html",
		controller:"middSecContrl" 
	})
	.when("/home",{
		templateUrl:"home.html",
		controller: 'middSecContrl'
	})
	.when("/about",{
		templateUrl:"about.html",
		controller: 'aboutController'
 	})//.otherwise({redirectTo:'/'});
	
})

//Nav Controllert
mainApp.controller('navController', function($scope,$http) {

    var url = "json/json-nav-data.js";
	$http.get(url).success(function(resp){
		$scope.navadata = resp.navDaraRecord;
	});
}); 

//home Controller	
mainApp.controller('middSecContrl',function($scope,$http){
	var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgQpVybjq5mlCtsocMrLBKuaGSp0-R_zT&key=AIzaSyCkyrTWm51YegFEHTpA5oBh7rJ61CsCDZ4&pageToken=CAUQAA&maxResults=15'
	$http.get(url).success(function(resp){
		$scope.middData = resp.items
	})
	
})

//About Controller
mainApp.controller('aboutController',function($scope,$http){
	var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgQpVybjq5mlCtsocMrLBKuaGSp0-R_zT&key=AIzaSyCkyrTWm51YegFEHTpA5oBh7rJ61CsCDZ4&pageToken=CAUQAA&maxResults=15'
	$http.get(url).success(function(resp){
		$scope.middData = resp.items
	})
	
})

//Story Controller

mainApp.controller('storyController',function($scope,$http,$routeParams){
	$scope.Urll = 'https://www.googleapis.com/youtube/v3/videos?id='+ $routeParams.a +'&part=snippet&key=AIzaSyCkyrTWm51YegFEHTpA5oBh7rJ61CsCDZ4';
	$scope.a = $routeParams.a;
	$http.get($scope.Urll).success(function(resp){
		$scope.middData = resp.items
	})
	
})
