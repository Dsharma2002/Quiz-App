const navSlide = () => {
    const short = document.querySelector(".short")
    const navElement = document.querySelector(".links")
    const navLinks = document.querySelectorAll(".links li")

    short.addEventListener("click", () => {
        navElement.classList.toggle("nav-active")

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`
            }
        })
         short.classList.toggle("toggle")
    })
}

const app = () => {
    navSlide()
}

app()
