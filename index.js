//Applying css using jquery

$("h1").addClass("big-title margin-50");
$("h1").removeClass("margin-50");
//$("h1").hasClass("margin-50") output-->true (Checks for the class contained by element)

//Manipulating text using jQuery

$("h1").text("bye");
$("h1").html("<em>bye</em>");
$("button").html("<strong> Don 't Click Me</strong>")

//Manipulating attributes on fly using jquery

$("h1").attr("class"); // "big-title" (Getting attribute)
$("a").attr("href", "https://www.yahoo.com"); //Setting attribute

//Adding Event Listeners using jQuery
// for (var i = 0; i < document.querySelectorAll("button").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }  This is using Javascript

$("button").click(function() {
    $("h1").css("color", "purple");
}); //Using jquery

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "red");
});

//Adding and removing elements using jquery

$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");
$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");

//$("button").remove();  (To remove the selected element)

//Adding animation using jquery

// $("button").click(function() {
//     $("h1").hide();
// });

//$("h1").show();

$("button").click(function() {
    $("h1").toggle();
});

$("button").click(function() {
    $("h1").fadeOut();
});

//$("h1").fadeOut();
//$("h1").fadeToggle();

$("button").click(function() {
    $("h1").slideUp();
});

//$("h1").slideDown();
//$("h1").slideToggle();

//To add user animation

$("button").mouseover(function() {
    $("h1").animate({ opacity: 0.3 });
});

//To add multiple animation

$("button").click(function() {
    $("h1").slideUp().slideDown().animate({ margin: "20%" });
});