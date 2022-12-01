let buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];

$(".btn").click(function(e){
    let userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    //  console.log(userClickedPattern);
});

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
}

function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}