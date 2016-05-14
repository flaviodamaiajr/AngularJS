(function () {

    BaseController.$inject = ['$log', '$timeout'];
    app.controller("BaseController", BaseController);

    function BaseController($log, $timeout) {

        this.sayHello = function () {
            this.customMessage("Sou a função da <strong>BaseController</strong>! <i class='fa fa-2x fa-hand-spock-o' aria-hidden='true'></i>", "Hey, Spock!");
            $log.info("Say Hello - BaseController");
        }

        this.customMessage = function(message, title){
            bootbox.dialog({
                message: message,
                title: title,
                buttons: {
                    main: {
                        label: "Ok",
                        className: "btn-primary"
                    }
                }
            });
        }

    };
})();
