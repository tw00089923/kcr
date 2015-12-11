angular.module("socially").controller("PCtrl", function ($scope, $stateParams, $meteor, $rootScope, $state, $modal ) {
  
  $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
  
  $scope.party =$meteor.object(Parties,$stateParams.partyId).subscribe('parties');

  $scope.parties = $meteor.collection(function() {
    return Parties.find({}, {
      sort : $scope.getReactively('sort')
    });
  });
  $scope.works = [];

  $scope.time2 = Session.get('abc');
  $scope.fine = ["ass","asa"];

  Session.set('abc',new Date() );
  var start = moment([1985,10,15]);

  $scope.student = $meteor.collection(Student, false).subscribe('student');


  
  $scope.fin = $meteor.collection(function() {
    return Student.find({"productive"});
  });

  

   $meteor.autorun($scope, function() {
  $scope.studentss = $meteor.collection(Student , false).subscribe('student');
  });

  $scope.addkey = function(){

    $scope.works.push({});
  };

  $scope.confirm = function(){
    
    Student.insert({"productive":$scope.works});

  };
  $scope.opennew = function(){
    $window.open('parties-list.ng.html')
  };
  

  $scope.studentremove = function (a) {
   $scope.work.splice($scope.work.indexOf(a), 1);

  };
  $scope.$stateParams = $stateParams;
 
  
  
});