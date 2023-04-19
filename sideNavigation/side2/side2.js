console.log("object")





let inp=document.getElementById("start")
inp.addEventListener('click', ()=>{
    let side=document.getElementById("side")
    let parent=document.getElementsByClassName("parent")[0]
    side.classList.toggle("active");
    parent.classList.toggle("parent-active");
})










