    $(document).ready(function(){

        const getRandomColor = function() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }
    
        function blinking(){
            const blinker = $("#blink");
            if(blinker.css("visibility") === "visible"){
                blinker.css("visibility", "hidden")
            } else {
                blinker.css("visibility", "visible");
                blinker.css("color", getRandomColor());
            }
            setTimeout(blinking, 520);
        }



        let txt = `Hi, I'm TJ`;
        let j = 0;
        const speed = 110;
        
        const typeWriter = function() {
          if (j < txt.length) {
            document.getElementById("hi").innerHTML += txt.charAt(j);
            j++;
            setTimeout(typeWriter, speed);
          } else {
            clearTimeout();
            $("#hi").append("<span id='blink'>|</span>");
            setTimeout(blinking, 520);
          }
        }
        typeWriter();
    });

