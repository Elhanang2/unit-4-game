//variable declaration and initialization
var sum=0;
var  win=0;
var losses=0;
var random='';
var random1=0;
var random2=0;
var random3=0;
//function to genetate random number to be gussed
function randomnum(){
 random = Math.floor(Math.random() * 102) + 19;
console.log(random);
        // ... and then dump the random number into our random-number div.
        $(".col-random").text(random);
        return random;
}randomnum();
        //cristals random number generater
       var  random1 = Math.floor(Math.random() * 11) + 1;
       var  random2 = Math.floor(Math.random() * 11) + 1;
        console.log(random2);
        var random3 = Math.floor(Math.random() * 11) + 1;
        console.log(random3);
        var random4 = Math.floor(Math.random() * 11) + 1;
//when the cristal button clicked random number added and score output 
$(".button-random1").on("click", function() {        
         sum=sum+random1;
         
         result();
         $(".score-row").text(sum); 
});
$(".button-random2").on("click", function() {        
    sum=sum+random2;
    result();
         $(".score-row").text(sum); 
   
});
$(".botton-random3").on("click", function() {        
    sum=sum+random3;
    console.log(sum);
    result();
         $(".score-row").text(sum); 
   
});
$(".button-random4").on("click", function() {        
    sum=sum+random4;
    result();
         $(".score-row").text(sum); 
   
});
//function to  compare the sum and random number given to decide winning or lossing 
    function result(){  
        if(sum==random){ 
            win++;
            $(".win").text("Win : " +win );
            $(".stat").text("You Won!!");
            sum=0;
            randomnum();
        }else if(sum>random){
            losses++;
            $(".losses").text("Losses : " + losses);
            $(".stat").text("You lost!!");
            sum=0;
            randomnum();
        }
    }

    function instruction() {
        var rule = document.getElementById("instruction");
        var btn = document.getElementById("instruction-button");
        if (rule.style.display === "none" && btn.innerHTML === "Read Instruction" ) {
          rule.style.display = "block";
          btn.innerHTML = "Hide Instruction"
        } else {
          rule.style.display = "none";
          btn.innerHTML = "Read Instruction"
        }
      }