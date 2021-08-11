for(var i=0; i<document.querySelectorAll('.drum').length; i++){

    document.querySelectorAll('.drum')[i].addEventListener("click",handleClick)
    document.querySelectorAll('.drum')[i].addEventListener("keydown", buttonPress)
}

function handleClick(){

   var buttonInnerHTML=this.innerHTML;
   makeSound(buttonInnerHTML);
    
}
//detecting keyboard press
function buttonPress(e){
var pressedButton= e.key;
makeSound(pressedButton);

}

function makeSound(key){
    switch (key) {
        case "w":
        var snare = new Audio('./sounds/snare.mp3')
         snare.play()   
            break;
    
         
         
         case "a":
         var tom2 =  new Audio('./sounds/tom-2.mp3')
         tom2.play()    
            break;
         
         
         case "s":
         var tom1 =  new Audio('./sounds/tom-1.mp3')
         tom1.play()      
            break;
         
         case "d":
         var tom3 =  new Audio('./sounds/tom-3.mp3')
         tom3.play()      
            break;
    
         case "j":
         var tom2  =  new Audio('./sounds/tom-2.mp3')
         tom2.play()     
             break;
        
         case "k":
         var crash =  new Audio('./sounds/crash.mp3')
         crash.play()       
            break;
         
         case "l":
         var kick =  new Audio('./sounds/kick-bass.mp3')
         kick.play()       
            break;
            
            default:
            break;
    }
    
}
