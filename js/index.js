let PP_CONTAINER = document.getElementById("profile_picture")
let PATPAT_GIF = document.getElementById("patpat_transparent")


PP_CONTAINER.addEventListener("mouseover", () => 
    {
        PATPAT_GIF.classList.remove("opacity-0")
    })
PP_CONTAINER.addEventListener("mouseout", () => 
    {
        PATPAT_GIF.classList.add("opacity-0")
    })


PP_CONTAINER.addEventListener("click", () =>
    {
        PATPAT_GIF.classList.add("translate-4"),
        console.log("test"),

        setTimeout(() => 
            {
            PATPAT_GIF.classList.remove("translate-4")
            }
        ,150)
    }
)