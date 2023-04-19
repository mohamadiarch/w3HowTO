



let sbar=document.getElementById("search")
let lies=document.querySelectorAll("li")
console.log(sbar)
console.log(lies)

console.log(sbar.value)
sbar.addEventListener('input', (el)=>{
    console.log("object", el.target.value)
    for (let index = 0; index < lies.length; index++) {
        const element = lies[index];
        if (element.innerHTML==el.target.value) {
            console.log("truuue")
        }
        
    }

})























