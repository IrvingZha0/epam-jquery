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

// handle the form events here

$("#formEvents form").submit(function(event) {

});