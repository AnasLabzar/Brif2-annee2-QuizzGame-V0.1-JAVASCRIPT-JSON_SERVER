let box = 130;
let random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let colors = [{
        color: "#262626"
    },
    {
        color: "#F2B279"
    },
    {
        color: "#80BDF2"
    },
    {
        color: "#1730BF"
    },
    {
        color: "#D94862"
    }
]

function colorRandom() {
    return colors[Math.floor(Math.random() * colors.length)].color;
}

function create() {
    for (let i = 0; i < box; i++) {
        let span = document.createElement("span")
        let s = document.createElement('s')
        span.prepend(s)
        canva.prepend(span)
    }
}
create()

function half() {
    let hf = random(0, 1);
    if (hf == 0) {
        hf = "25"
    } else if (hf == 1) {
        hf = "-25"
    }
    return hf;
}

function late() {
    for (let l = 0; l < box; l++) {
        let s = document.querySelectorAll('span s')[l]
        s.style.borderColor = colorRandom()
        s.style.transform = "scale(2) translate(" + half() + "%, " + half() + "%)"
    }
}

function randomFull() {
    late()
}
poster.onclick = randomFull
setInterval(randomFull, 4000);
window.requestAnimationFrame(randomFull)