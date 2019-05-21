window.onload = function() {
    // Code goes here


    //APP CONTROLLER
    function appController() {
        console.log('App has started.');

        // submit --> button
        document.querySelector('.submit_button').addEventListener('click', function() {
            // Call caluclate function
            calculateFunc();
        });


        // submit --> enter key
        document.querySelector('.input_field').addEventListener('keydown', function(el) {
            if(el.keyCode === 13) {
                // Call calculate funtion
                calculateFunc();
            }
        });


        // Calculate function
        function calculateFunc() {
            let userInput = document.querySelector('.input_field').value;
            console.log('userInput: ' + userInput);

            var now = new Date();
            now.setMinutes(now.getMinutes() + parseInt(userInput));
            now = new Date(now);

            var x = setInterval(function() {

                var present = new Date();

                var distance = new Date();
                distance.setHours(now.getHours() - present.getHours());
                distance.setMinutes(now.getMinutes() - present.getMinutes());
                distance.setSeconds(now.getSeconds() - present.getSeconds());
                distance = new Date(distance);

                var diffSec = now.getSeconds() - present.getSeconds();
                var diffMin = now.getMinutes() - present.getMinutes();
                var diffHr = now.getHours() - present.getHours();

                if(diffSec === 0 && diffMin === 0 && diffHr === 0) {
                    document.querySelector('.timer').textContent = "Time's up!";
                    stop();
                } else {
                    // Call UI CONTROLLER
                    UIController(distance);
                }

                function stop() {
                    clearInterval(x);
                }

            }, 1000);
        }

    }



    // UI CONTROLLER
    function UIController(datum) {
        document.querySelector('.timer').textContent = datum.getHours() + 'H ' + datum.getMinutes() + 'M ' + datum.getSeconds() + 'S ';
    }




    appController();


    // Code ends here
}