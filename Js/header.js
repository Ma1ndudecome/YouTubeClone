"use strict"


let glass_adaptation = document.getElementById("glass_adaptation")
let adaptation = document.getElementById("adaptation")
let img_adaptation = document.getElementById("img_adaptation")
const burger = document.querySelector(".burger")
const aside = document.querySelector("aside")
const asideSign = document.querySelector(".aside_SignIn")
const menuExploreHidden = document.querySelector(".menu_Explore.down")
const menuExplore = document.querySelectorAll(".menu_Explore")
const exploreContainer = document.querySelector(".explore_Container")
const exploreItem = document.querySelectorAll(".Explore_element_menu li")
const exploreItemA = document.querySelectorAll(".Explore_element_menu li a")
const exploreItemAP = document.querySelectorAll(".Explore_element_menu li a p")
const main = document.querySelector("main")
const backdrop = document.querySelector(".backdrop")
const nowHeight = window.innerHeight
if(window.innerWidth < 820){
    aside.classList.add('none')
    aside.classList.add("positionFixed")
    aside.classList.add("w120")
}

function el(){
    const mas = []
    for(let i = 0; i < exploreItem.length - 6; i +=1){
        mas.push(exploreItem[i])
    }
    return mas
}
window.addEventListener('resize', ()=>{
    if(window.innerWidth <= 1380){
        asideSign.classList.add("down")
        document.querySelector(".menu_Explore.downItem").classList.add('down')
    }
    console.log(window.innerWidth)
    if(window.innerWidth > 820){
        backdrop.classList.remove("active")
        aside.classList.remove("positionFixed", "w120")
        aside.classList.toggle('block')
        aside.classList.remove("ovhAuto")
        menuExplore.forEach(el=>el.classList.remove('w100Pr'))
        exploreItemA.forEach(el=>{
            el.classList.remove('fdR')
            el.classList.remove('gap10')
        })
       } else if(window.innerWidth < 820){
        main.classList.toggle("w100Pr")
        main.classList.toggle("pad0")
        
        aside.classList.add('none')
        aside.classList.add("positionFixed")
        aside.classList.add("w120")
        
    }else{
        aside.classList.remove('none')
    }
   
})

glass_adaptation.addEventListener("click",(e)=>{
    // search.style.position ="fixed"
   
    adaptation.style.display = "flex";
    glass_adaptation.style.display ="none"
})

img_adaptation.addEventListener("click",() =>{
    adaptation.style.display = "none";
   glass_adaptation.style.display ="flex"
})
burger.onclick = ()=>{
    main.classList.toggle("w100Pr")
   
    if(window.innerWidth < 820){
        aside.classList.remove("none")
        aside.classList.add('block')
        backdrop.classList.add("active")
        document.body.classList.toggle('ovhHidden')
        aside.classList.add("ovhAuto")
        menuExplore.forEach(el=>el.classList.add('w100Pr'))
        asideSign.classList.remove('down')
        menuExploreHidden.classList.remove('down')
        el().forEach(el=>{
         
        })
        exploreItemA.forEach(el=>{
            el.classList.add('fdR')
            el.classList.add('gap10')
        })
    }else{
        aside.classList.remove("positionFixed", "w120")
        aside.classList.toggle('block')
        aside.classList.toggle("none")
    }
}
backdrop.onclick = ()=>{
    backdrop.classList.remove("active")
    aside.classList.add("none")
    document.body.classList.remove('ovhHidden')
}
// function f1(){
//     if(window.innerWidth < 590){
//         glass_adaptation.style.display ="flex"
//        }
//         else{
//         glass_adaptation.style.display ="none"
//         }
// }
// f1()
// window.addEventListener("resize",f1)