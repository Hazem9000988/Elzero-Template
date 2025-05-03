let nav = document.querySelectorAll('.nav li')
let menu = document.querySelector(".menu")
let navbar = document.querySelector(".nav")

nav.forEach((lis) => {
    lis.addEventListener("click", function () {
        lis.classList.toggle('open')
    })
})

document.addEventListener("click", function (e) {
    if (e.target == nav) {
        if (nav.classList.contains("open")) {
            nav.classList.remove("open")
        }
    }
})


// Animate width with scrolling
let section = document.querySelector(".skill");
let spans = document.querySelectorAll(".prog span");

window.addEventListener("scroll", function () {
    if (window.scrollY >= section.offsetTop) {
        console.log("Reached Section Three");
        spans.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    }
});

// Create countDown Timer

let dateLastYear = new Date("Dec 31,2026 23:59:59").getTime()

let count = setInterval(() => {
    let dateNow = new Date().getTime()

    let dateDiff = dateLastYear - dateNow

    let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    let hour = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minute = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
    let second = Math.floor(dateDiff % (1000 * 60) / (1000))

    document.querySelector(".days").innerHTML = day
    document.querySelector(".hours").innerHTML = hour
    document.querySelector(".minute").innerHTML = minute
    document.querySelector(".second").innerHTML = second

    if (dateDiff < 0) {
        clearInterval(count)
    }
}, 1000)

// Increase Numbers On Scrolling

let stats = document.querySelector('.status');
let boxs = document.querySelectorAll(".box .number")
let started = false
window.addEventListener("scroll", function () {
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            boxs.forEach((box) => startCount(box))
        }
        started = true
    }
})

function startCount(e) {
    let goal = e.dataset.goal
    let count = setInterval(() => {
        e.textContent++
        if (e.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}
