// for (var i=0; i<document.querySelectorAll(".drum").length; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (event)
//     {
//         var instrumentclick=this.innerHTML;
//         // console.log(instrumentclick);
//         makeSound(instrumentclick);
//         change(instrumentclick);
        
//     });
// }
$("button").on("click",function (event)
{
    var instrumentclick=$(this).text();
    console.log($(instrumentclick).text());
    makeSound(instrumentclick);
    change(instrumentclick);
});
function change(something)
{
    var active=$("."+something);
    active.addClass("pressed");
    setTimeout(function(){
        active.removeClass("pressed");
    },100);
}
// function change(something)
// {
//     var active=document.querySelector("."+something);
//     active.classList.add("pressed");
//     // console.log(this);
//     setTimeout(function(){
//         active.classList.remove("pressed");
//     },100);
// }
$("body").keydown(function(event)
{
    var instrument=event.key;
    makeSound(instrument);
    change(instrument);
});
// document.addEventListener("keydown",function (event)
// {
//     var instrument=event.key;
//     // console.log(instrument);
    
//     makeSound(instrument);
//     change(instrument);
// });

function makeSound(instrument)
{
    if (instrument=="w")
    {
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if (instrument=="a")
    {
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if (instrument=="s")
    {
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if (instrument=="d")
    {
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if (instrument=="j")
    {
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if (instrument=="k")
    {
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if (instrument=="l")
    {
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}

