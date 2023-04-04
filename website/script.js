let search = document.querySelector(".search_box");

document.querySelector("#search_icon").onclick = () => {
    search.classList.toggle("active");
    navbar.classList.remove("active");
}



let navbar = document.querySelector(".navbar");

document.querySelector("#bars_icon").onclick = () => {
    navbar.classList.toggle("active");
    search.classList.remove("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
    search.classList.remove("active");
    
}


