//code to change color from dark mode to light mode

let toggle = document.querySelector(".toggle");
let text = document.querySelector(".toggleText");
let container = document.querySelector(".container");
let mainContainerP = document.querySelector(".main-container p");
let mainContainerTop = document.querySelector(".main-container-top");
let followChild = document.querySelector(".follow-child");
let mainContainerOver = document.querySelector(".main-container-over");
let mainInfoChild = document.querySelector(".main-info-child");
let followChildH3 = document.querySelector(".follow-child h3");
let infoChildH4 = document.querySelector(".info-child h4");


function Animatedtoggle() {
    toggle.classList.toggle("active");

    if (toggle.classList.contains("active")) {
        container.style.background = "var(--White-BG)";
        mainContainerP.style.color = "var(--Dark-Grayish-Blue-Text)";
        mainContainerTop.style.color = "var(--Very-Dark-Blue-Text)";
        followChild.style.background = "var(--Light-Grayish-Blue-Card-BG)";
        mainContainerOver.style.color = "var(--Very-Dark-Blue-Text)";
        mainInfoChild.style.background = "var(--Light-Grayish-Blue-Card-BG)";
        followChildH3.style.color = "var(--Very-Dark-Blue-Text)";
        infoChildH4.style.color = "var(--Very-Dark-Blue-Text)";
        text.innerHTML = "Dark Mode";
    }
    else {
        text.innerHTML = "Light Mode";
        container.style.background = "var(--Very-Dark-Blue-BG)";
        mainContainerP.style.color = "var(--Desaturated-Blue-Text)";
        mainContainerTop.style.color = "var(--White-Text)";
        followChild.style.background = "var(--Dark-Desaturated-Blue-Card-BG)";
        mainContainerOver.style.color = "var(--White-Text)";
        mainInfoChild.style.background = "var(--Dark-Desaturated-Blue-Card-BG)";
        followChildH3.style.color = "var(--White-Text)";
        infoChildH4.style.color = "var(--White-Text)";
    }
}



