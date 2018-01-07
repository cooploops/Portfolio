const left = $(".left");
const right = $(".right");
const landing = $(".landing");

left.hover(function(){
    landing.addClass("hover-left")},
    function(){
    landing.removeClass("hover-left")
    }
);

right.hover(function(){
    landing.addClass("hover-right")}, 
    function(){
        landing.removeClass("hover-right")
    }
);