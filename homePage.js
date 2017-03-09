var vid = document.getElementById("bgvid");
// var pauseButton = document.getElementById("exploreButton");

// pauseButton.addEventListener("click", function() {
//     vid.classList.toggle("stopfade");
//     if (vid.paused) {
//         vid.play();
//         pauseButton.innerHTML = "Pause";
//     } else {
//         vid.pause();
//         pauseButton.innerHTML = "Paused";
//     }
// })

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
    vid.pause();
// to capture IE10
    vidFade();
});

/* Set the width of the side navigation to 200px */
function openNav() {
    document.getElementById("mySideNav").style.width = "200px";
    document.getElementById("navButton").style.display="none";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("navButton").style.display="block";
}