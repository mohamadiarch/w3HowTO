console.log("object");


let lables=document.getElementsByClassName("lable")

for (let index = 0; index < lables.length; index++) {
    lables[index].addEventListener("click",(el)=>{
        console.log();
        let c=el.target.nextSibling.nextElementSibling.classList
        c.toggle("active")
    })
    
}


