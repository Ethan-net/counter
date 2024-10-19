const countDisplay = document.querySelector(".countDisplay");

let count = 0;

function countClick() {
    count++
    // console.log(count);
    countDisplay.textContent = count;
}
