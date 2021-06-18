
 


  var helloText = document.querySelector("#letters");                               //GET THE "HELLO" TEXT
  helloText.innerHTML = helloText.textContent.replace(/\S/g,"<span>$&</span>")          //DIVIDE TEXT INTO LETTERS AND PUT THEM INTO SPAN

  

  var myName1Text = document.querySelector(".myName1");                               //GET THE "ROBERT" TEXT
  myName1Text.innerHTML = myName1Text.textContent.replace(/\S/g,"<span>$&</span>") 

  var myNameText = document.querySelector(".myName");                               //GET THE "ROBERT" TEXT
  myNameText.innerHTML = myNameText.textContent.replace(/\S/g,"<span>$&</span>")  


  function scroll(){
    document.getElementById("body").style.overflowY= "scroll";
    
  }
  
  document.addEventListener("load", loader(), setTimeout(scroll, 9000));

 function loader(){
   
  var helloTl= anime.timeline({
    loop: false,
  })









    //-----------------------   HOME ANIMATIONS  ------------------------//






  helloTl
  .add({
    targets: "#letters span",                         //HELLO 
    keyframes: [
      {translateY : -600},
      {translateX : -1000, delay: 1000},
    ],
    duration: 3000,
    delay : anime.stagger(100),
  })
  
  .add({
    targets: "#loader",                             //LOADER SCREEN 
    keyframes:[
      {width: 0}
    ],
    duration: 1000,
  })




  .add({
    targets:".lines1 div",                       //TOP LINES 
    keyframes:[
      {width: 30}
    ],
    easing: "linear",
    duration: 500,
  })

  .add({                                          
    targets:" .line1_2",
    keyframes:[
      {rotate: -90}
    ],
    easing: "linear",
    duration: 500,
  }, "-=400")



  .add({
    targets:".lines2 div",                       //BOTTOM LINES 
    keyframes:[
      {width: 30}
    ],
    easing: "linear",
    duration: 500,
  },"-=1000")

  .add({                                          
    targets:" .line2_1",
    keyframes:[
      {rotate: -90}
    ],
    easing: "linear",
    duration: 500,
  }, "-=400")






 
  pageWidth =  document.body.offsetWidth;
  if(pageWidth < 680){
    helloTl
    .add({
      targets:".myName1 span",                      //HOME NAME1 
      keyframes:[
        {translateY: 400},
      ],
      duration: 500,
      delay : anime.stagger(100),
      easing: "linear",
    })
  
  
  
    .add({
      targets:".myName span",                       //HOME NAME2 
      keyframes:[ 
        {translateY: 560},
        {scale: 1.5},
        {scale: 1},
      ],
      duration: 2000,
      delay : anime.stagger(100),
      
      
    })
  }else{
    helloTl 
    .add({
      targets:".myName1 span",                      //HOME NAME1 
      keyframes:[
        {translateY: 300},
      ],
      duration: 500,
      delay : anime.stagger(100),
      easing: "linear",
    })
  
  
  
    .add({
      targets:".myName span",                       //HOME NAME2 
      keyframes:[ 
        {translateY: 400},
        {scale: 1.5},
        {scale: 1},
      ],
      duration: 2000,
      delay : anime.stagger(100),
      
      
    })
  }


}


