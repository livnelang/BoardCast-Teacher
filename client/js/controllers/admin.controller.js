app.controller('adminCtrl', function ($scope, $http, $window) {
 console.log('hi admin main control panel ..');
    $scope.teacher_id = {"teacher_id": "997675"};

 /**
  * Returns Teacher Courses List
  */
 $http.post("http://localhost:3000/teachersCourses",$scope.teacher_id  ).success(function (data) {
        console.dir('data: ' +  data.courses)
    });


});