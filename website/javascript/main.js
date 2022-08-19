function moon() {

    let button = document.querySelector(".main-button__moon");
    let DarkMood = document.querySelector(".dark-mood");
    let sun = document.querySelector(".main-sun");
    let moon = document.querySelector(".main-moon");
    let h1 = document.querySelector(".main-h1");
    let backdrop = document.querySelector(".backdrop");
    let MainSun = document.querySelector(".mainsun");

    // DarkMood.style.display = "block";
    // backdrop.style.display = "none"
    sun.style.display = "block";
    h1.style.color = "#fff";
    
    if (sun.style.display === "block") {
        moon.style.display = "none";
        backdrop.style.display = "block";
        DarkMood.style.display = "none";
        MainSun.style.display = "none";
    }  
    else {
        moon.style.display = "block";
        backdrop.style.display = "none";
        DarkMood.style.display = "block";
        MainSun.style.display = "block";
    }

}

function sun() {

    let button = document.querySelector(".main-button__moon");
    let DarkMood = document.querySelector(".dark-mood");
    let sun = document.querySelector(".main-sun");
    let moon = document.querySelector(".main-moon");
    let h1 = document.querySelector(".main-h1");
    let LogoSun = document.querySelector(".fa-sun");
    let backdrop = document.querySelector(".backdrop");

    DarkMood.style.display = "none";
    backdrop.style.display = "block"
    sun.style.display = "none";
    moon.style.display = "block";
    h1.style.color = "black";
    
    if (moon.style.display === "block") {
        sun.style.display = "none";
        backdrop.style.display = "none";
        DarkMood.style.display = "block";
    }  
    else {
        sun.style.display = "block";
        backdrop.style.display = "block";
        DarkMood.style.display = "none";
    }
}

function getFullscreenElement() {
    return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement;
}

function toggleFullscreen() {
    if (getFullscreenElement()) {
        // document.exitFullscreen();
    }
    else {
        document.getElementById("main-game").requestFullscreen().catch(consloe.log);
    }
}

document.addEventListener("dblclick", () => {
    toggleFullscreen();
})
