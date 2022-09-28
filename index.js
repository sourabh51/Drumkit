

// mocuse button click
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
 var buttonInnerHTML = this.innerHTML;

makeSound (buttonInnerHTML);
buttonAnimation (buttonInnerHTML);

});
}

 // keyboard press

document.addEventListener("keydown", function(event){
makeSound(event.key.toLowerCase() || event.key.toUpperCase());
buttonAnimation(event.key.toLowerCase() || event.key.toUpperCase());
});

function makeSound(key) {
  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
     break;
     case "s":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play();
      break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
       break;
       case "j":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
        break;
        case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
        case "l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
         break;
         case "1":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
          break;
          case "2":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
                    var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
                              var tom2 = new Audio("sounds/tom-2.mp3");
              tom2.play();


               var tom3 = new Audio("sounds/tom-3.mp3");
               tom3.play();


                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();

                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();


                  var tom2 = new Audio("sounds/tom-2.mp3");
                  tom2.play();

                   var tom3 = new Audio("sounds/tom-3.mp3");
                   tom3.play();

                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();

                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();

                      var tom2 = new Audio("sounds/tom-2.mp3");
                      tom2.play();

                       var tom3 = new Audio("sounds/tom-3.mp3");
                       tom3.play();
                      
                        var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
           break;


          break;

    default: console.log();

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add ("pressed");
  setTimeout (function() {
  activeButton.classList.remove("pressed");
}, 100);

}
