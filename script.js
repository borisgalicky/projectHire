$(document).ready(function(){
    $("#login_button").click(function(){
        var username=$("#username").val();
        var password=$("#password").val();
        if((username.length>3) && (password.length>4)){
        $("#error").html("");
        window.location.href = "subpages/login.html"
        }
        else{
        $("#error").html("Invalid Username or Password.<br>Please try again.");
        }
    })
});