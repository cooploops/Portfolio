    $(document).ready(function(){

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }
    
        let blinker = $("#blink");
        function blinking (){
            if(blinker.css("visibility") === "visible"){
                blinker.css("visibility", "hidden")
            } else {
                blinker.css("visibility", "visible");
                blinker.css("color", getRandomColor());
            }
        }
        setInterval(blinking, 520);

        // let speed = 100;
        // let txt = `Hi I'm, TJ`;
        // let iterator = 0;

        // function typeWrite(){
            
        //     if(iterator < txt.length){
        //         document.getElementById("hi").innerHTML += txt.charAt(iterator);
        //         iterator++;
        //         setTimeout(typeWrite, speed);
        //     }
        // }
        // typeWrite();
        // setTimeout(setInterval(blinking, 520), 105);

    });

