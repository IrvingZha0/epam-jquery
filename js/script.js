// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yooo! ");
});

$("#before button").click(function() {
  $("#before p").before("Yooo! ");
});

$("#css1 button").click(function() {
  $("#css1 p").css("font-size","20px");
});

$("#css2 button").click(function() {
  $("#css2 p").css({"font-size":"20px","color": "plum"});
});

$("#attr1 button").click(function() {
  var href = $("#attr1 p a").attr("href");
  console.log(href);
});

$("#attr2 button").click(function() {
  var href1 = $("#attr2 p a").attr("href","http://www.google.com");
  console.log(href1);
});

$("#class1 button").click(function() {
  $("#class1 p").addClass("bg-primary");
});

$("#class2 button").click(function() {
  var has = $("#class2 p").hasClass("lead");
  console.log(has);
});

$("#form1 button").click(function() {
  var form1 = $("#exampleInputEmail1").val();
  console.log(form1);

});

$("#form2 button").click(function() {
  $("#exampleInputName2").val("Jane Doe is coming");

});

// handle the mouseover event here
$("#mouse img").mouseover(function(){
  var height = $(this).height();
  var width = $(this).width();
  $(this).height(height*1.5);
  $(this).width(width*1.5);
});
$("p").mouseover(function(){
  $("p").css("background-color","yellow");
});
$("p").mouseout(function(){
  $("p").css("background-color","#E9E9E4");
});

// handle the form events here

$("#formEvents form").submit(function(event) {
  event.preventDefault();
  console.log("email :"+ " " + $("#inputEmail3").val());
  console.log("password :"+ " " + $("#inputPassword3").val());
  console.log("checkbox :"+ " " + $(".checkbox input[type=checkbox]").prop("checked"));

});

// handle animations
$("#animate1 img").one("mouseover",function(){
  $(this).animate({
      width: "70%",
    }, 1500);
})

$("#animate2 img").dblclick(function(event) {
  if($("#animate2 img").css("margin-left")=="800px") {
     $("#animate2 img").animate({
      "margin-left": "0px"
    },500,"swing");
  }else{
    $("#animate2 img").animate({
      "margin-left": "800px"
    },500,"swing");
  }
});
//fade
var img3 = $("#animate3 img");
img3.dblclick(function(){
  img3.fadeOut("slow",function(){
    img3.animate(function(){
       },1000,function(){
     img3.attr("src","images/cat.png");
     img3.fadeIn("slow",function(){
      img3.animate(function(){
      },1000,"swing");
    });
   });
  });

});