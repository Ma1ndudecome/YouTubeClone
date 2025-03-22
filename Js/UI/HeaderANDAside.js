"use strict"
import { once } from "process"
import { URL } from "../URL/createObject.js"
import { markingProfile } from "../Marking/Marking.js"


let glass_adaptation = document.getElementById("glass_adaptation")
let adaptation = document.getElementById("adaptation")
let img_adaptation = document.getElementById("img_adaptation")
const burger = document.querySelector(".burger")
export const aside = document.querySelector("aside")
const backdrop = document.querySelector(".backdrop")
const subscriberContainer = document.querySelector(".sing_int svg")
const SingButton = document.querySelector(".SignIn_element")



burger.addEventListener('click', () => {
    if (window.innerWidth > 1200) {
        return
    }

    aside.classList.toggle("wow")
    aside.classList.add("block")
    if (aside.classList.contains("wow")) {
        backdrop.style.display = 'block'
    } else {
        backdrop.style.display = 'none'

    }
})
backdrop.onclick = () => {
    aside.classList.remove("wow")
    aside.classList.remove("block")

    backdrop.style.display = 'none'
}


glass_adaptation.addEventListener("click", (e) => {


    adaptation.style.display = "flex";
    glass_adaptation.style.display = "none"
})

img_adaptation.addEventListener("click", () => {
    adaptation.style.display = "none";
    glass_adaptation.style.display = "flex"
})
const functionLogin = (e) => {
    e.preventDefault()
    window.location.href = URL.logInURL;
}
subscriberContainer.onclick = functionLogin
SingButton.onclick = functionLogin


export function themeChange(block, oldMark) {
    block.querySelector(".dark_theme")?.addEventListener("click", () => {
        document.documentElement.classList.add("black");
        document.documentElement.classList.remove("white");
        localStorage.setItem('theme', 'black');
        block.innerHTML = oldMark
    });
    block.querySelector(".back")?.addEventListener("click", () => {
        console.log(oldMark)
        block.innerHTML = oldMark
    })

    block.querySelector(".light_theme")?.addEventListener("click", () => {
        document.documentElement.classList.add("white");
        document.documentElement.classList.remove("black");
        localStorage.setItem('theme', 'white');
        block.innerHTML = oldMark

    });
}
export function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.removeAttribute('class')
        document.documentElement.classList.toggle(savedTheme);
    } else {
        document.documentElement.removeAttribute('class')
        document.documentElement.classList.add('white');
    }
}