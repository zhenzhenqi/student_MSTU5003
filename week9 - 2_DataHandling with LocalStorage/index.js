let numDom = document.querySelector('#number

// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
let num = localStorage.getItem('number');
if (num) {
    displayNum(num)
} else {
    numDom.textContent = 0;
};

function getNum() {
    let number = numDom.textContent;
    return number;
};

function displayNum(data) {
    numDom.textContent = data;
};
function SaveNumToLocal(data) {
    localStorage.setItem('number', data);
};


// addBtn function
let addBtn = document.querySelector('.add');
addBtn.addEventListener('click', function () {
    let num = getNum();
    let newNum = num - 0 + 1
    displayNum(newNum);
    SaveNumToLocal(newNum);
})

// subtract Btn funciton
let minusBtn = document.querySelector('.minus');
minusBtn.addEventListener('click', function () {
    let num = getNum();
    let newNum = num - 0 - 1
    displayNum(newNum);
    SaveNumToLocal(newNum);
})

// clear LocalStorage Btn function
let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', function () {
    displayNum(0);
})

// clear LocalStorage Btn function
let clearLocalBtn = document.querySelector('.clear-local');
clearLocalBtn.addEventListener('click', function () {
    localStorage.clear();
    displayNum(0);
})

// refresh the browser
let refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', function () {
    window.location.reload();
})
