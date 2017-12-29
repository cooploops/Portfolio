$(document).ready(function(){
    $("#sendMsg").on("click", function(){
        let messageText = $("#message-text").val();
        console.log(messageText);
        $("#message-text").val("");
    });
});