//
var sum=0;
var  win=0;
var losses=0;
var random='';
var random1=0;
var random2=0;
var random3=0;

function randomnum(){
 random = Math.floor(Math.random() * 102) + 19;
console.log(random);
        // ... and then dump the random number into our random-number div.
        $(".col-random").text(random);
        return random;
}randomnum();
       var  random1 = Math.floor(Math.random() * 11) + 1;
       var  random2 = Math.floor(Math.random() * 11) + 1;
        console.log(random2);
        var random3 = Math.floor(Math.random() * 11) + 1;
        console.log(random3);
        var random4 = Math.floor(Math.random() * 11) + 1;
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