const countDisplay = document.querySelector(".countDisplay");
const previousCount = document.getElementsByClassName("precount");


console.log(previousCount)
let count = 0;

function countClick() {
    count++
    // console.log(count);
    countDisplay.innerText = count;
}

function save() {
    let countStr = count + "-";
    previousCount.innerText += countStr;
    // console.log(countStr)
    countDisplay.textContent = 0;
    count = 0
}
