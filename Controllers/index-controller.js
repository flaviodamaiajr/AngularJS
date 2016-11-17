(function () {

    // Necessário efetuar a injeção de dependencia do $controller
    // que é o serviço responsável por efetuar a instância da BaseController na IndexController.
    IndexController.$inject = ['$log', '$controller'];
    app.controller("IndexController", IndexController);

    function IndexController($log, $controller) {

        var ctrl = this;        
        // Criada a instância da controller Base.
        ctrl.base = $controller('BaseController', {});
        
        ctrl.sayHello = function (button) {

            if(button == "index"){
                // Utilizando a função customMessage da BaseController.
                ctrl.base.customMessage("Sou a função da <strong>IndexController</strong>, utilizando a <strong>BaseController</strong>! <i class='fa fa-2x fa fa-hand-peace-o' aria-hidden='true'></i>", "Hey!");
                $log.info("Say Hello - IndexController");
                return;
            }
            // Chamando a função sayHallo da BaseController.
            ctrl.base.sayHello();

        }

    };
})();
