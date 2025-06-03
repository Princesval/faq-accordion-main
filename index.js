const btn1 = document.getElementById("btn-1");
const img1 = document.getElementById("img-1");
const text1 = document.getElementById("text-1");

btn1.addEventListener('click', ()=> {
    if (text1.style.display == "block") {
        img1.src = "assets/images/icon-plus.svg";
        text1.style.display = "none";
    } else {
        img1.src = "assets/images/icon-minus.svg";
        text1.style.display = "block";
    }
})

const btn2 = document.getElementById("btn-2");
const img2 = document.getElementById("img-2");
const text2 = document.getElementById("text-2");

btn2.addEventListener('click', ()=> {
    if (text2.style.display == "block") {
        img2.src = "assets/images/icon-plus.svg";
        text2.style.display = "none";
    } else {
        img2.src = "assets/images/icon-minus.svg";
        text2.style.display = "block";
    }
})

const btn3 = document.getElementById("btn-3");
const img3 = document.getElementById("img-3");
const text3 = document.getElementById("text-3");

btn3.addEventListener('click', ()=> {
    if (text3.style.display == "block") {
        img3.src = "assets/images/icon-plus.svg";
        text3.style.display = "none";
    } else {
        img3.src = "assets/images/icon-minus.svg";
        text3.style.display = "block";
    }
})

const btn4 = document.getElementById("btn-4");
const img4 = document.getElementById("img-4");
const text4 = document.getElementById("text-4");

btn4.addEventListener('click', ()=> {
    if (text4.style.display == "block") {
        img4.src = "assets/images/icon-plus.svg";
        text4.style.display = "none";
    } else {
        img4.src = "assets/images/icon-minus.svg";
        text4.style.display = "block";
    }
})