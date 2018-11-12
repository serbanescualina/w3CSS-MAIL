var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


$("#msj1").click(function () {

    $("#Message1").show();
    $("#Message2").hide();
   $("#Message3").hide();
});
$("#msj2").click(function () {

    $("#Message2").show();
    $("#Message1").hide();
     $("#Message3").hide();

});

$("#msj3").click(function () {

    $("#Message3").show();
    $("#Message1").hide();
    $("#Message2").hide();

});

$("#write").click(function(){
  $("#mms").show();
  $("#be").css('opacity','0.6');
})
$(".cls").click(function(){
  $("#be").css('opacity','1');
  $("#mms").hide();
})