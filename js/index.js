const PP_CONTAINER = document.getElementById("profile_picture")
const PATPAT_GIF = document.getElementById("patpat_transparent")
const BACKGROUND_CONTAINER = document.getElementById("backgrounds")

const textBoxElement = document.getElementById("typewriter")
let textBoxPhrases = [
    "Hello there ! welcome to my linktree clone :D", 
    "I was too stingy to pay... and though it would be fun to make one !", 
    "There's a few of my links here, come take a look.",
    "Background is random, cause I think they all look great. ^w^",
    "The font ? its 'wondermail' a PMD EoS font recreated by fans",
    "Take a look at the commissions I did in the past with the Trello link",
    "I listen to a lot of games ost, check my playlist's",
    "I will respond on both Discord or Telegram, if I'm not overwhelmed '^^",
    "I got my shy periods... so dont take my absence as a offense",
    "There's cracked photoshop links at https://cheapgriffy.fr/Adobe_bordel/",
    "I swear I was forced to wear that JingleBell collar ;-;",
    "W-why are you taking so long on that page... I feel nervous ><",
]

// pat pat hover
PP_CONTAINER.addEventListener("mouseover", () => {
    PATPAT_GIF.classList.remove("opacity-0")
})
PP_CONTAINER.addEventListener("mouseout", () => {
    PATPAT_GIF.classList.add("opacity-0")
})

// pat pat click check
PP_CONTAINER.addEventListener("click", () => {
    PATPAT_GIF.classList.add("scale-70")
    console.log("test"),

        setTimeout(() => {
            PATPAT_GIF.classList.remove("scale-70")
        }
            , 150)
}
)

/**
 * give random number between two inputs.
 * @min
 * @max
 * @returns a random int between the two values 
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

// https://www.youtube.com/watch?v=R846J8LJ6os Tutorial used
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * transform a <p> in a typewriter style effect
 * @sleepTime time between each letters, also between words relative
 * @phrases Each wanted word as a array
 */
async function writeLoop(sleepTime, phrases, text) {
    let curPhraseIndex = 0;
    while (true) {
        let curWord = phrases[curPhraseIndex];
        
        // typing
        for (let i = 0; i < curWord.length; i++) {
            text.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
        
        await sleep(sleepTime * 80)

        // removing
        for (let i = curWord.length; i > 0; i--) {
            text.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime / 2);
        }

        await sleep(sleepTime * 5)
        
        // update index, and loop it
        if (curPhraseIndex === phrases.length -1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};

writeLoop(35, textBoxPhrases, textBoxElement)
backgroundChoice()