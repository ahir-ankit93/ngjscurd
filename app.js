// var app = angular.module("myApp",[]);

// app.controller("myAppCtrl",function($scope){

//     $scope.test = "Hello";



// });



let app= angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/login",{
        templateUrl:"views/login.html"
    }).
    when("/register",{
        templateUrl:"views/register.html"
    }).
    when("/aboutus",{
        templateUrl:"views/aboutus.html"
    }).
    when("/contact",{
        templateUrl:"views/contact.html"
    }).otherwise({
        redirectTo:"/login"
    })
});// route


app.controller ("myAppCtrl",function($scope,$http){
    
    // $http.get("https://api.github.com/users").then(function(item){
    $http.get("data.json").then(function(item){
        $scope.players=item.data;
    })
})

// app.controller("myCtrl",function(){

// })// controller