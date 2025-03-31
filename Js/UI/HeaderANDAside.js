"use strict"
import { once } from "process"
import { URL } from "../URL/createObject.js"
import { markingProfile } from "../Marking/Marking.js"
import { TIMEOUT } from "dns"

// gaming
import { container, setNewUrl } from "../features/ReExportFeatures.js";
import { GetContentGaming } from "../api/AllApiRequest.js";
import { dateTime, fromViewToShortView, formatDuration, addClassList, removeClassList, changeInnerHTML, selectElements } from "../untils/reExportUntils.js";
import { shortVideoMarking, markingTab, makeMarkingVideo, iconGaming ,iconNews ,iconSports,iconCourses} from "../Marking/reExportMarking.js";

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
        block.classList.remove("block")
    }, { once: true });
    block.querySelector(".back")?.addEventListener("click", () => {
        block.innerHTML = oldMark
      block.classList.remove("block")
    })

    block.querySelector(".light_theme")?.addEventListener("click", () => {
        document.documentElement.classList.add("white");
        document.documentElement.classList.remove("black");
        localStorage.setItem('theme', 'white');
        block.innerHTML = oldMark
        block.classList.remove("block")

    }, { once: true });
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

// TAB

function tabContainerBlock() {
    removeClassList(container, "grid")
    addClassList(container, "block")
}
function changeInnerMarkingTab(nameTab, iconTab) {
    changeInnerHTML(container, '')
    changeInnerHTML(container, markingTab(nameTab, iconTab))
}
async function fillingContentTab() {
    const gamingContainer = selectElements(container, ".Container-video-gaming")
    const shortsContainer = selectElements(container, ".shorts-video-conteiner")
    const videos = await GetContentGaming();

    videos.forEach(el => {
        if (el.snippet.liveBroadcastContent !== 'none') return
        let durationVideo = formatDuration(el.contentDetails.duration)

        if (Number(durationVideo[0]) === 0) {
            shortsContainer.insertAdjacentHTML("beforeend", shortVideoMarking(el.snippet.thumbnails.standard.url, el.snippet.title, el.statistics.viewCount, el.id))
        } else {
            gamingContainer.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), dateTime(el.snippet.publishedAt), durationVideo, el.id))
        }
        
    })
}

export async function clickGaming() {
    setNewUrl("/Gaming")
    tabContainerBlock()
    changeInnerMarkingTab("Gaming", iconGaming)
    fillingContentTab()
}

export async function clickNews() {
    setNewUrl("/News")
    tabContainerBlock()
    changeInnerMarkingTab("News", iconNews)
    let textNews = document.getElementById("txtTab")
    textNews.style.fontSize = "50px"
    fillingContentTab()
}
export async function clickSports() {
    setNewUrl("/Sports")
    tabContainerBlock()
    changeInnerMarkingTab("Sports", iconSports)
    fillingContentTab()
}
export async function clickCourses() {
    setNewUrl("/Courses")
    tabContainerBlock()
    changeInnerMarkingTab("Courses", iconCourses)
    fillingContentTab()
}