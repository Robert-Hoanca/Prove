

function createBubble(){
    
   bubble= document.getElementById("little_bubbles");             //Get bubble container

   var createElement = document.createElement("div");             //Create a bubble
   var size = Math.random() * 60;                                 //Random size variable
   left= Math.random() * 1400;                                    //Random offset from left
   
   createElement.style.width= size + "px";                        //Create a bubble with random heigh / width / left
   createElement.style.height= size + "px";
   createElement.style.left= left + "px";
   bubble.appendChild(createElement);                             //Attach the bubble to the container

   setTimeout(() => {                                             //Timer to remove bubbles
      createElement.remove()
   }, 6000)
}
setInterval(createBubble, 180)                                    //Timer from each bubble


//Random position with Math.random()


