const root = document.querySelector("body")

import { typeWriter } from "./typewritter.js"


const init = () =>{
    const opening_section = document.createElement("div")
    opening_section.classList.add("absolute", "top-0", "w-screen", "h-screen", "flex", "items-center", "justify-center", "bg-[#121212]")
    
    const entry_text = document.createElement("span")
    entry_text.classList.add("font-[Outfit]", "text-2xl", "typewritter")
    entry_text.textContent = "Hello"
    
    root.appendChild(opening_section)
    opening_section.appendChild(entry_text)

    const is_done_writting = typeWriter(25, ["Hello hey", "goober"], document.querySelector(".typewritter"), false)
    if (is_done_writting == true){
        opening_section.remove()
    }
}

export { init }
