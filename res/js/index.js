// Typewriter effect
const big_typer = new TypeIt('#typer-big', {
    strings: [
        'University of Toronto grad.',
        'coder.',
        'tinkerer.',
        'writer.',
        'film geek.',
        'dog lover.',
        'big thinker.',
        'creator.'
    ],
    speed: 50,
    breakLines: false,
    waitUntilVisible: true,
    loop: true,
    nextStringDelay: 1500,
    loopDelay: [
        100, 2500
    ],
    startDelete: true,
    startDelay: 500
});
const small_typer = new TypeIt('#typer-small', {
    strings: [
        'a creator.',
        'a UofT grad.',
        'a coder.',
        'a tinkerer.',
        'a writer.',
        'a film geek.',
        'a dog lover.',
        'a big thinker.',
        "<strong><a href=\"mailto:hello@rafirahman.com\" class=\"text-link\">Rafi Rahman.</a>"
    ],
    speed: 20,
    breakLines: false,
    waitUntilVisible: true,
    loop: true,
    nextStringDelay: 2500,
    loopDelay: [
        100, 2500
    ],
    startDelete: true,
    startDelay: 1500
});
mobile_width = 1000;
current_typer = (window.innerWidth <= mobile_width ? small_typer : big_typer);
current_typer.go();
window.onresize = function () {
    var refresh_flag = false;
    if ((window.innerWidth <= mobile_width) && (current_typer != small_typer)) {
        refresh_flag = true;
        new_typer = small_typer;
    } else if ((window.innerWidth > mobile_width) && (current_typer != big_typer)) {
        refresh_flag = true;
        new_typer = big_typer;
    }
    if (refresh_flag === true) {
        console.log('Toggling alternate typer element')
        current_typer.destroy();
        current_typer = new_typer;
        current_typer.go();
    }
}
// Vanta.js effects
if (window.innerWidth <= 1000) {
    VANTA.NET({
        el: "body",
        color: 0xaf0a75,
        backgroundColor: 0x191c20,
        points: 10,
        maxDistance: 12,
        spacing: 20
    })
} else {
    VANTA.NET({
        el: "body",
        color: 0xaf0a75,
        backgroundColor: 0x191c20,
        points: 10,
        maxDistance: 12,
        spacing: 16
    })
}
// Transition effect
const resume_button = document.getElementById("resume-button")
resume_button.onclick = function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var layers = document.querySelectorAll(".transition-layer");
    for (const layer of layers) {
        layer.classList.add("active");
    }
    $('#layer-last').on('transitionend webkitTransitionEnd', function () {
        window.location = href;
    })
}
// Browser update notification
var $buoop = {
    required: {
        e: -4,
        f: -3,
        o: -3,
        s: -1,
        c: -3
    },
    insecure: true,
    style: "top",
    api: 2020.02,
    test: false,
    text: "<b>Your browser ({brow_name}) is out of date.</b>  <a{up_but}>Update</a> <a{ignore_but}>Ignore</a>"
};
function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
};
try {
    document.addEventListener("DOMContentLoaded", $buo_f, false)
} catch (e) {
    window.attachEvent("onload", $buo_f)
}
