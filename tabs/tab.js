

console.log("object");


let sections=document.getElementsByClassName("li")
let texts=document.getElementsByClassName("text")
for (let index = 0; index < sections.length; index++) {
    //mouseover is hover in js
    sections[index].addEventListener("hover",(el)=>{
        console.log(el.target.id);
        for (let index = 0; index < texts.length; index++) {
            console.log(texts[index].classList ,"45");
            texts[index].classList.remove("active")
        }
        let showItem=document.getElementById(`${el.target.id}-text`)
        showItem.classList.add("active")
    })
    
}