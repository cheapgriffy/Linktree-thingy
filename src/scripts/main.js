import { getRandomInt } from "./global.js"
import { init } from "./opening.js"

const BACKGROUND_CONTAINER = document.querySelector("#backgrounds")



/**
 * get from getRandomInt() a int and delete other background in the bg div
 */
function backgroundChoice() {
    let max_bg = BACKGROUND_CONTAINER.getElementsByTagName('*').length - 1;
    let bg_array = Array.from(BACKGROUND_CONTAINER.children);
    bg_array[getRandomInt(0, max_bg)].classList.remove("hidden")

    bg_array.forEach(element => {
        if (element.classList.contains("hidden")) {
            element.remove()
        }
    });
}

backgroundChoice()
init()
