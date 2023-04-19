console.log("object")


let elements =document.getElementsByClassName("pa-ham")
let two =document.getElementById("ham1")
let one =document.getElementById("ham2")
let three =document.getElementById("ham3")

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (target)=>{
        console.log(one)
        one.classList.toggle("active");
        two.classList.toggle("active");
        three.classList.toggle("active");
    }, false);
}
