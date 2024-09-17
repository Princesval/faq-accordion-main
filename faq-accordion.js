function textoAparece1() {
    let texto1 = document.getElementById('texto1')
    let img1 = document.getElementById('img1')
if (texto1.style.display == 'block') {
    texto1.style.display = 'none'
    img1.src = 'assets/images/icon-plus.svg'
} else {
    texto1.style.display = 'block'
    img1.src = 'assets/images/icon-minus.svg'
}
}

function textoAparece2() {
    let texto2 = document.getElementById('texto2')
    let img2 = document.getElementById('img2')
    if (texto2.style.display == 'block') {
        texto2.style.display = 'none'
        img2.src = 'assets/images/icon-plus.svg'
    } else {
        texto2.style.display = 'block'
        img2.src = 'assets/images/icon-minus.svg'
    }
}

function textoAparece3() {
    let texto3 = document.getElementById('texto3')
    let img3 = document.getElementById('img3')
    if (texto3.style.display == 'block') {
        texto3.style.display = 'none'
        img3.src = 'assets/images/icon-plus.svg'
    } else {
        texto3.style.display = 'block'
        img3.src = 'assets/images/icon-minus.svg'
    }
}

function textoAparece4() {
    let texto4 = document.getElementById('texto4')
    let img4 = document.getElementById('img4')
    if (texto4.style.display == 'block') {
        texto4.style.display = 'none'
        img4.src = 'assets/images/icon-plus.svg'
    } else {
        texto4.style.display = 'block'
        img4.src = 'assets/images/icon-minus.svg'
    }
}
