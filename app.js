angular.module('magicAction',[]);

angular.module('magicAction').controller("MainCtrl",function ($scope) {
    $scope.showmain = false;

    $scope.openSidebar = function(){
        $scope.showmain = true;
    }

    $scope.hideSidebar = function(){
        $scope.showmain = false;
    }

});



