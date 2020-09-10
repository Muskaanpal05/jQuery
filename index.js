//Applying css using jquery

$("h1").addClass("big-title margin-50");
$("h1").removeClass("margin-50");
//$("h1").hasClass("margin-50") output-->true (Checks for the class contained by element)

//Manipulating text using jQuery

$("h1").text("bye");
$("h1").html("<em>bye</em>");
$("button").html("<strong> Don 't Click Me</strong>")