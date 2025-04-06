let navbar = document.querySelector(".navbar")
let imgLogo = document.querySelector("#imgLogo")
let navIcons = document.querySelector("#nav-icons")
let navButton = document.querySelector("#nav-button")

console.dir(imgLogo);
console.dir(navIcons);

window.addEventListener("scroll", ()=>{

    let scroll = window.scrollY;
    

    if(scroll > 142) {
        imgLogo.src = ``
        
    }else {
        imgLogo.src = `http://127.0.0.1:5500/SitoModaRobyAngelo/Media/logoB.png`

    }

    if(scroll>0) {
        navIcons.style.visibility ="hidden"
        navButton.style.visibility ="hidden"
    }else {
        navIcons.style.visibility ="visible"
        navButton.style.visibility ="visible"
    }

})