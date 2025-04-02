"use strict"
import { URL } from "../URL/reExportUrl.js"


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


export function themeChange(block) {
    block.querySelector(".dark_theme")?.addEventListener("click", () => {
        document.documentElement.classList.add("black");
        document.documentElement.classList.remove("white");
        localStorage.setItem('theme', 'black');
    });

    block.querySelector(".light_theme")?.addEventListener("click", () => {
        document.documentElement.classList.add("white");
        document.documentElement.classList.remove("black");
        localStorage.setItem('theme', 'white');
    });
}
export function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.removeAttribute('class')

        document.documentElement.classList.toggle(savedTheme);
        console.log(savedTheme)
    } else {
        document.documentElement.removeAttribute('class')
        document.documentElement.classList.add('white');
    }
}

 
  const show_All_Hide_All = document.querySelector(".aside_bottom_Show_All_Hide_All")
  const show_All = document.querySelector(".show_All")
  const hide_All = document.querySelector(".hide_All")

 export function aside_bottom_Show_All_Hide_All () {
     show_All_Hide_All.style.display = "block"
     console.log("1")
  }

 export function show_All_Display_block  () {
      show_All.style.display = "flex"
    
      
  }
 function show_All_none_Hide_All_none  () {
    show_All.style.display = "none"
    show_All_Hide_All.style.display = "none"
    
  }



show_All.onclick = show_All_none_Hide_All_none()
    

const aside_SignIn_buttonMore_2 = document.getElementsByClassName("aside_SignIn_buttonMore_2")

hide_All.onclick = () => {
    show_All_none_Hide_All_none();
   
    const dataSubscribeSet = new Set(dataSubscribe);

    const blockListSing = document.querySelectorAll(".block_list_sing_int_subscription_title");
    blockListSing.forEach((el) => {
        if (dataSubscribeSet.has(el.textContent)) {
            el.parentElement.remove();
        }
    });
        
  
};


const show_All_Subscriptions = document.getElementById("show_All_Subscriptions") // Основной блок пдписок

const img_subscriptions = document.getElementById("img_subscriptions") //фоторафия подписки

const name_Subscriptions = document.getElementById("name_Subscriptions")//Название канала

const number_of_Subscriptions = document.getElementById("number_of_Subscriptions") //количество подписок

const channel_description = document.getElementById("channel_description") // Описание канала


