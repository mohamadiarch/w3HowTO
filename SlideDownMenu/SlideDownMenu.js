

console.log("object")
let parent= document.querySelector(".parent")
let menu= document.querySelector(".menu")

console.dir( parent)
parent.addEventListener("scroll",(event)=>{
    if(parent.scrollTop > 20){
        menu.classList.add("show")
        console.log("000000000000000000000")
    }
    if(parent.scrollTop < 20){
        menu.classList.remove("show")
        console.log(parent.scrollTop, "object")
    }
    // console.log(parent.scrollTop,"object")
})

