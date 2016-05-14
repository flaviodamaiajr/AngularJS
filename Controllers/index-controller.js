(function () {

    IndexController.$inject = ['$log', '$timeout', '$controller'];
    app.controller("IndexController", IndexController);

    function IndexController($log, $timeout, $controller) {

        var ctrl = this;

        ctrl.base = $controller('BaseController', {});

        ctrl.year = new Date().getFullYear();        

        ctrl.sayHello = function (button) {

            if(button == "index"){
                ctrl.base.customMessage("Sou a função da <strong>IndexController</strong>, utilizando a <strong>BaseController</strong>! <i class='fa fa-2x fa fa-hand-peace-o' aria-hidden='true'></i>", "Hey!");
                $log.info("Say Hello - IndexController");
                return;
            }
            ctrl.base.sayHello();

        }

    };
})();
