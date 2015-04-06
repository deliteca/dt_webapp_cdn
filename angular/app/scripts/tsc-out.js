var dt;
(function (dt) {
    'use strict';
    angular.module('angularApp', []).controller('MainCtrl', dt.MainCtrl).controller('AboutCtrl', dt.AboutCtrl);
})(dt || (dt = {}));
var dt;
(function (dt) {
    'use strict';
    var AboutCtrl = (function () {
        function AboutCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return AboutCtrl;
    })();
    dt.AboutCtrl = AboutCtrl;
})(dt || (dt = {}));
var dt;
(function (dt) {
    'use strict';
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return MainCtrl;
    })();
    dt.MainCtrl = MainCtrl;
})(dt || (dt = {}));
//# sourceMappingURL=tsc-out.js.map