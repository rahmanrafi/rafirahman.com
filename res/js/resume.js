// Mobile download button animation
var prevYOffset = window.pageYOffset;
window.onscroll = function () {
  var button = document.getElementById("dl-small");
  if (window.pageYOffset == 0 || prevYOffset - 20 > window.pageYOffset) {
    button.style.visibility = "visible";
    button.style.opacity = 1;
    button.style.bottom = "2.5%"
  } else if (prevYOffset < window.pageYOffset) {
    button.style.visibility = "hidden";
    button.style.opacity = 0;
    button.style.bottom = "5%"
  }
  prevYOffset = window.pageYOffset;
};

// Browser update notifier
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
  text: "<b>Your browser ({brow_name}) is outdated and may break this page.</b> <a{up_but}>Update</a> <a href=\"resume.pdf\" id=\"emergency-button\">View PDF</a> <a{ignore_but}>Ignore</a>"
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