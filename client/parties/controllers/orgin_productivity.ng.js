angular.module("socially").controller("PCtrl", function ($scope, $stateParams, $meteor, $rootScope, $state, $modal ) {
  
  $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
  
  $scope.party =$meteor.object(Parties,$stateParams.partyId).subscribe('parties');

  $scope.parties = $meteor.collection(function() {
    return Parties.find({}, {
      sort : $scope.getReactively('sort')
    });
  });
  $scope.ad = [];

  var af = angular.toJson($scope.ad);
  $scope.time2 = Session.get('abc');
  $scope.fine = ["ass","asa"];

  Session.set('abc',new Date() );

  

  

  $scope.length12 = {};

  $scope.student = $meteor.collection(Student, false).subscribe('student');

  $scope.students = $meteor.collection(Student, false).subscribe("student");

   $meteor.autorun($scope, function() {
  $scope.studentss = $meteor.collection(Student , false).subscribe('student');
  });


  $scope.studentj = angular.isArray($scope.student);

  $scope.addkey = function(){

    //$scope.ad.name.push({ work_number:'',work_name:'',material_number:'',process_number:'',work_input:'',lottos:'',acceptedgood:'',accmulation:'',nonacceptedgood:'',unfinishedgood:'',starttime:'',endtime:''});
    $scope.ad.push( {starttime:'',endtime:''});
  };

  $scope.confirm = function(){
    
   //for( i=0; i < $scope.ad.length ; i++)
    Student.insert({name:[$scope.ad]}); 

  };

  
  $scope.studentremove = function (student) {
   $scope.ad.splice($scope.student.indexOf(student), 1);
  };
  $scope.$stateParams = $stateParams;
 
  
  
});