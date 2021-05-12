var binary= [];                                                                       //Create an array for binary bits

var onScreen;                                                                       



function binaryConverter(){
    binary = [];                                                                       
    text = 0;                                                                          //single binary bit variable
    document.getElementById("bubbles").innerHTML="";
    var decimal = document.getElementById("decimal").value;                            //Gets value from user input
    
    console.log(decimal);

    var result = decimal/2;                                                            //Divide the input per two
        
        while (result != 0){                                                           //While the result is different from 0

            console.log("Result: ",result);
            
                if(Number.isInteger(result)){                                          //Control if the result is an integer
                    rest = 0;                                                   
                    console.log("rest: ", rest);                                       //If yes then the rest is equal to 0
                    binary.push(rest);                                                 //The rest is insert into the array
                    console.log("Binary: ",binary);
                    
                }else{
                 result = Math.floor(result);
                 rest = 1;                                                             //If No the rset is equal to 1
                 binary.push(rest);                                                    //Insert the rest into the array
                 console.log("Integer result: ",result);
                 console.log("rest: ", rest);                                          //Show results in the console
                 console.log("Array: ", binary);
             
                }
            
           
           
           result = result/2;                                                           //At the end of the control the number is
        };                                                                              //ridivided per two

          
        binary.reverse();                                                               //The array's order is flipped
        console.log(binary);

        onScreen = document.getElementById("binary_result").innerHTML= binary;          //Show the result on the HTML page
        
        for(var i=0; i<binary.length; i++){                                             //Cycle to create bubbles with bits

            text =  binary[i];                                                          //Every cycle gets one bit from the array

            var bubble = document.createElement("div");                                    //Create a new div element in HTML

           
            
            var size= (Math.random() * 70)+65;
            //var textSize= (Math.random() * 5)+2;
            bubble.className = "bubble";                                               //Gives  to the div a class
            
            //bubble.style.fontSize= textSize + "vw";
            bubble.style.width= size + "px";
            bubble.style.height= size + "px";
            bubble.innerHTML= text;                                                    //Insert the output in the div
            
            
            
            
            
            document.getElementById("bubbles").appendChild(bubble);                    //Append the div to bubbles element in HTML

            

        }

         

   
     
};


