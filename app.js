/*angular.module('myApp',[]).controller('myController',function($scope){
	$scope.template=[{
		femaleName:'female name',
		jobTitle:'job title',
		tediousTask:'tedious task',
		dirtyTask:'dirty task',
		celebraty:'celebraty',
		uselessSkill:'useless skill',
		adjective:'adjective',
		obnoxiousCelebraty:'obnoxious celebraty',
		num:'huge number',

	}];
});*/
var newApp = angular.module('myApp',['ngAnimate'])

	newApp.controller('myController',function($scope){
		$scope.pgfront='show';

		$scope.generateMadlib=function(){
			$scope.pgfront='hide';
		};
		$scope.startOver = function () {
			$scope.femaleName = null;
			$scope.dirtyTask = null;
			$scope.obnoxiousCelebraty = null;
			$scope.jobTitle = null;
			$scope.celebrity = null;
			$scope.num = null;
			$scope.tediousTask = null;
			$scope.uselessSkill = null;
			$scope.adjective = null;
			$scope.pgfront = 'show';


		};

	});