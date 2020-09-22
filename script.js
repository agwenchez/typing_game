const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZeros (time){
    if(time <=9){
        time = "0" + time;
    }

    return time
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = leadingZeros(timer[0]) + ":" + leadingZeros(timer[1]) + ":"+ leadingZeros(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60)
    timer[1] = Math.floor((timer[3]/100)- timer[0]*60)
    timer[2] = Math.floor(timer[3] - (timer[1]*100) -(timer[0]*6000) )


}


// Match the text entered with the provided text on the page:
function spellChecker (){
    let textEntered= testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length)

    if(textEntered == originText){
        testWrapper.style.borderColor = "green";
    }else{
        if(textEntered == originTextMatch){
            testWrapper.style.borderColor = "#f4853c";
        }else{
            testWrapper.style.borderColor = "red";
        }
    }

 } 

// Start the timer:
function start (){
   let textEnteredLength = testArea.value.length;

   if(textEnteredLength === 0){
       setInterval(runTimer, 10)
   }
    console.log(textEnteredLength)
} 

// Reset everything:
function reset(){
    console.log("Reset button has been triggered")
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellChecker, false);
testArea.addEventListener("click", reset, false);