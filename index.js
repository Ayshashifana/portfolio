

let menu = document.querySelector(".menubars")
let header=document.querySelector("header")

menu.onclick=()=>{
    menu.classList.toggle("fa-times")
    header.classList.toggle("active")
}
window.onscroll=()=>{
    menu.classList.remove("fa-times")
    header.classList.remove("active")
}

let cur1=document.querySelector(".cursor-1")

let cur2=document.querySelector(".cursor-2")

window.onmousemove=(e)=>{
    cur1.style.top=e.pageY+"px"
    cur1.style.left=e.pageX+"px"
    cur2.style.top=e.pageY+"px"
    cur2.style.left=e.pageX+"px"
}

let links=document.querySelectorAll("a")

links.forEach(link=>{
        link.onmouseover=()=>{
            cur1.classList.add("active")
            cur2.classList.add("active")
        }
        link.onmouseleave=()=>{
            cur1.classList.remove("active")
            cur2.classList.remove("active")
        }
})
