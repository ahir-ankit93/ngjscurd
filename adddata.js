var app= angular.module("adddata",[]);

app.controller("addCtrl",function($scope){

    $scope.addUsers = function(user){

        $scope.users.push({
            name:$scope.newName,
            age:$scope.newAge,
            salary:$scope.newSalary,
            company:$scope.newCompany
        
        })

        // var addUsers = $scope.users.indexOf(user);
        // $scope.users.push(addUsers,1);
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
