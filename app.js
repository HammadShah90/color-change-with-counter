// =========== Get Elements by HTML=========>>>>>>>>

const mainColorChangerPage = document.querySelector(".mainColorChangerPage")
// console.log(mainColorChangerPage);
const colorChangerCodes = document.querySelector(".colorChangerCodes")
// console.log(colorChangerCodes);
const clickCounter = document.querySelector(".clickCounter")
// console.log(clickCounter);


// =========== Get Buttons by HTML=========>>>>>>>>

const clickButton = document.querySelector(".clickButton")
// console.log(clickButton);
const resetButton = document.querySelector(".resetButton")
// console.log(resetButton);


// =========== Get RGB Numbers=========>>>>>>>>

let colorNumbers = Array.from(Array(255).keys());
console.log(colorNumbers.length);


// =========== create counter variable=========>>>>>>>>

let count = 0;


// =========== create functions=========>>>>>>>>

const colorChanger = () => {

    // console.log(colorChangerCodes.textContent);

    let randomValue1 = Math.floor(Math.random() * colorNumbers.length)
    // console.log(randomValue1);
    let randomValue2 = Math.floor(Math.random() * colorNumbers.length)
    // console.log(randomValue2);
    let randomValue3 = Math.floor(Math.random() * colorNumbers.length)
    // console.log(randomValue3);

    let rgbColor = `RGB(${randomValue1},${randomValue2},${randomValue3})`
    console.log(rgbColor);

    colorChangerCodes.textContent = rgbColor

    mainColorChangerPage.style.backgroundColor = rgbColor

    clickCounter.textContent = ++count;

}


const resetBtn = () => {
    colorChangerCodes.innerHTML = "White"
    
    mainColorChangerPage.style.backgroundColor = "#ffffff"

    clickCounter.textContent = 0

    count = 0
};


// =========== button calls=========>>>>>>>>

clickButton.addEventListener("click", colorChanger)
resetButton.addEventListener("click", resetBtn)