function incrementCount(event){
        if(event.target.id == `button1`){
    // get current clickCount
        let count = Cookies.get(`clickCount`);
    // add +1 to current clickCount
        count++;
        Cookies.set(`clickCount`, count);
    }else if(event.target.id == `button2`){
        let count = Cookies.get(`secondCount`);
        count++;
        Cookies.set(`clickCount`, count);
    }else if(event.target.id == `button3`){
        let count = Cookies.get(`thirdCount`);
        count++;
        Cookies.set(`clickCount`, count);
    } 
}

// dont worry about setting functions in the line like the slidedeck shows, just declare the function for timed intervals alone then call it
// Function i'm setting up to use with a Timed Event
function changeBackground(){
    document.body.style.backgroundColor = `lavender`;
}

function startCountdown(){
    // setTimeout(function, miliseconds)
    setTimeout(changeBackground, 5000);
}

function intervalHandler(){
    intervalCount++
    console.log(interval);
}

function stopInterval(){
    clearInterval(interval);
}

document.getElementById(`countdownStart`).addEventListener(`click`, startCountdown);
// this as-is will start when page loads
// setTimeout(changeBackground, 5000);
let interval = setInterval(intervalHandler, 1000);
let intervalCount = 0;
// using this would keep it going forever, ping just keeps printing on inspector
// setInterval(intervalHandler, 1000)

let count = Cookies.get(`clickCount`);
let count2 = Cookies.get(`secondCount`);
let count3 = Cookies.get(`thirdCount`);
// only create if cookie wasn't there
if(count == undefined){
    Cookies.set(`clickCount`, 0);
}
if(count2 == undefined){
    Cookies.set(`secondCount`, 0);
}
if(count3 == undefined){
    Cookies.set(`thirdCount`, 0);
}

// things that arent in functions always run on STARTUP
Cookies.set(`clickCount`, `0`);
// add an event listener to react to clicks on the button
document.getElementById(`button1`).addEventListener(`click`, incrementCount);
document.getElementById(`button2`).addEventListener(`click`, incrementCount);
document.getElementById(`button3`).addEventListener(`click`, incrementCount);

