angular.module('magicAction').directive('actionOnClickOutside',['$document',function($document){

    return {
        priority: 1,
        restrict: 'A',
        template: '',
        scope: {
            action : "&actionOnClickOutside"//,
        },
        link: function($scope, $element, $attr){

            var $body = angular.element($document[0].body);
            $body[0].addEventListener("click", listener, true);

            function listener (event) {
                var e = event.toElement || event.relatedTarget;
                if (e.parentNode == this || e == this) {
                    $scope.$apply(function () {
                        $scope.action();
                        $body[0].removeEventListener("click", listener, true);
                    });
                }
            }
        }
    };
}]);