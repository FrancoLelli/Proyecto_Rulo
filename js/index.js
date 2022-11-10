logo = document.getElementById("loge")

window.addEventListener("scroll", () => {
    let header = document.querySelector("header")
    const navMenu = document.querySelector(".navegation ul")
    header.classList.toggle("abajo", window.scrollY>0)
    logo.classList.add("colorIcon")
    
    if(window.scrollY==0){
        navMenu.classList.remove("show")
    }

    if(header.classList.contains("abajo")){
        logo.classList.add("colorIcon")
    }else{
        logo.classList.remove("colorIcon")
    }
})


const navToggle = document.querySelector(".barra");
const navMenu = document.querySelector(".navegation ul")
let header = document.querySelector("header")
navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("show")
    header.classList.add("show")
    if(header.classList.contains("show")){
        logo.classList.add("colorIcon")
    }else{
        logo.classList.remove("colorIcon")
    }

    if(navMenu.classList.contains("show")){
        header.classList.add("abajo")  
    }else{
        if(window.scrollY>0){

        }else{
            header.classList.remove("abajo") 
            logo.classList.remove("colorIcon")
        }
    }
})
