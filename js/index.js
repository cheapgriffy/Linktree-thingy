const PP_CONTAINER = document.getElementById("profile_picture")
const PATPAT_GIF = document.getElementById("patpat_transparent")
const BACKGROUND_CONTAINER = document.getElementById("backgrounds")

// pat pat hover
PP_CONTAINER.addEventListener("mouseover", () => 
    {
        PATPAT_GIF.classList.remove("opacity-0")
    })
PP_CONTAINER.addEventListener("mouseout", () => 
    {
        PATPAT_GIF.classList.add("opacity-0")
    })

// pat pat click check
PP_CONTAINER.addEventListener("click", () =>
    {
        PATPAT_GIF.classList.add("scale-70")
        console.log("test"),

        setTimeout(() => 
            {       
            PATPAT_GIF.classList.remove("scale-70")
            }
        ,150)
    }
)

/**
 * give random number between two inputs, values will be normalised, so dont use two close floats.
 * @param {Minimum value} min 
 * @param {maximum value} max 
 * @returns a int between the two values 
 */
function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function backgroundChoice()
{
    let max_bg = BACKGROUND_CONTAINER.getElementsByTagName('*').length -1;
    let bg_array = Array.from(BACKGROUND_CONTAINER.children);
    bg_array[getRandomInt(0, max_bg)].classList.remove("hidden")

    // remove unused background, to enchance performance
    bg_array.forEach(element => {
        if(element.classList.contains("hidden"))
        {
            element.remove()
        }
    });
}

backgroundChoice()