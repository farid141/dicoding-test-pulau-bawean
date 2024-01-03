const wisata = document.getElementsByTagName('h3');

for (let i = 0; i < wisata.length; i++) {
    wisata[i].addEventListener("click", function () {
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            this.classList.add("inactive");
            this.classList.remove("active");
        }
        else {
            content.style.display = "block";
            this.classList.add("active");
            this.classList.remove("inactive");
        }
    })
}

window.addEventListener("hashchange", function () { scrollBy(0, -65) })
