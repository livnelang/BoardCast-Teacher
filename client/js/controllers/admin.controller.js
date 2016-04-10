app.controller('adminCtrl', function ($scope, $http, $window) {
 console.log('hi admin main control panel ..');
    $scope.teacher_id = {"teacher_id": "997675"};
    $scope.courses = [];

 /**
  * Returns Teacher Courses List
  */
 $http.post("http://52.34.153.216:3000/teachersCourses",$scope.teacher_id  ).success(function (data) {
        console.dir('teacher courses: ' +  data[0].courses);
        $scope.courses = data[0].courses;
    });


});