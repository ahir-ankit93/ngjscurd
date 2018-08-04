var app = angular.module("user",[]);

app.controller("userCtrl",function($scope){


    $scope.removeUser = function(user){

        var removeUser = $scope.users.indexOf(user);
        $scope.users.splice(removeUser,1);
    }

    $scope.addUsers = function(user){

        $scope.users.push({
            name:$scope.newName,
            age:$scope.newAge,
            salary:$scope.newSalary,
            company:$scope.newCompany
        
        })
    }

    $scope.users = [
        {
            name:"ankit",
            age:25,
            salary:50000,
            company:"brillo"
        },
        {
            name:"ajay",
            age:35,
            salary:40000,
            company:"hcl"
        },
        {
            name:"bhavin",
            age:22,
            salary:60000,
            company:"tcs"
        }
        
    ]


});