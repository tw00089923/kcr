angular.module("socially").controller("fileControl", 
  function ($scope, $meteor,$stateParams) {


  	 $scope.parties = [
        {'name': 'Dubstep-Free Zone',
         'description': 'Can we please just for an evening not listen to dubstep.'},
        {'name': 'All dubstep all the time',
         'description': 'Get it on!'}
      ];
  	
});