/**
 * Created by Tom's Desktop on 4/22/2016.
 */
// Toggle class on and off when clicked
$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
});

// When the X is clicked
$("ul").on("click","span",function (event) {
    // remove li
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    // Stop other events from firing
    event.stopPropagation();
});

// Add new todos
$("input[type='text']").keypress(function (event){
    // check for enter key
    if(event.which===13)
    {   // get the text input
        var todoText = $(this).val();
        // remove the text in box
        $(this).val("");
        // make a new li
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

// For the toggle of ad on
$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});

















// JS VERSION
/**
 // CHeck off specific todos by clicking
 $("li").on("click",function () {
    // toggle when clicked
    // if li is grey
    if($(this).css("color") === "rgb(128, 128, 128)") {
        // turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    // else
    else{
        // turn it grey
        $(this).css({
            color: "grey",
            textDecoration: "line-through"
        });
    }
});
 */





