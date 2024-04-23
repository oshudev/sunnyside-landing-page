import "./scss/main.scss";

const hamburgerMenu = document.querySelector(".header__menu");
const headerList = document.querySelector(".header__list");
headerList.style.display = "none";
headerList.ariaHidden = "true";

hamburgerMenu.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("no-scroll");
    hamburgerMenu.classList.toggle("header__menu--active");

    if (headerList.style.display === "none") {
        headerList.style.display = "";
        hamburgerMenu.ariaExpanded = true;
        headerList.ariaHidden = false;

        setTimeout(() => {
            headerList.classList.add("visible");
        }, 300);
    } else {
        hamburgerMenu.ariaExpanded = false;
        headerList.classList.remove("visible");
        headerList.ariaHidden = true;

        setTimeout(() => {
            headerList.style.display = "none";
        }, 300);
    }
});

window.addEventListener("resize", navBar);
window.onload = navBar;

function navBar() {
    const viewWidth = document.documentElement.clientWidth;
    headerList.style.display = viewWidth < 768 ? "none" : "";

    if (viewWidth >= 768) {
        headerList.style.display = "";
        headerList.classList.remove("visible");
        headerList.ariaHidden = false;
        hamburgerMenu.classList.remove("header__menu--active");
        hamburgerMenu.ariaExpanded = false;
        hamburgerMenu.ariaHidden = true;
    } else {
        headerList.ariaHidden = true;
        hamburgerMenu.ariaExpanded = true;
        hamburgerMenu.ariaHidden = false;
    }
}
