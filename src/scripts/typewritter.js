/**
 * transform a <p> in a typewriter style effect
 * @param {int} sleeptime between each letters, also between words relative
 * @param {array} phrase wanted word as a array
 * @param {span, domElement} text, soon to be containing the content typewritted
 * @param {boolean} keep_going, if list loop.
 * 
 * @returns {boolean} True if done writting
 */
async function typeWriter(sleepTime, phrases, text, keep_going = true) {
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
        

        if (curPhraseIndex === phrases.length -1 && keep_going == true) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }

        if(curPhraseIndex == phrases.length && keep_going == false){
            return true
        }
        
    }
};

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export { typeWriter }