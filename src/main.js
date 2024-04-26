import "./scss/main.scss";

const hamburgerMenu = document.querySelector(".header__menu");
const headerList = document.querySelector(".header__list");

hamburgerMenu.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("no-scroll");
    hamburgerMenu.classList.toggle("header__menu--active");

    if (hamburgerMenu.classList.contains("header__menu--active")) {
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

window.onresize = window.onload = () => {
    const viewWidth = document.documentElement.clientWidth;

    if (!hamburgerMenu.classList.contains("header__menu--active")) {
        headerList.style.display = "none";
    }

    if (viewWidth >= 768) {
        headerList.style.display = "";
        headerList.classList.remove("visible");
        headerList.ariaHidden = false;
        hamburgerMenu.classList.remove("header__menu--active");
        hamburgerMenu.ariaExpanded = false;
        hamburgerMenu.ariaHidden = true;
    } else {
        headerList.ariaHidden = true;
        hamburgerMenu.ariaExpanded = false;
        hamburgerMenu.ariaHidden = false;
    }
};
