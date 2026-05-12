function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
}

function changeIcon() {
    const icon = document.querySelector(".theme-toggle img");
    if (icon.getAttribute('src') === './img/icon-light.svg') {
        icon.setAttribute('src', './img/icon-dark.svg')
    } else {
        icon.setAttribute('src', './img/icon-light.svg')
    }
}

function changeBackground() {
    const asideLight = document.querySelector("#aside-light");
    const asideDark = document.querySelector("#aside-dark");

    const attributionLight = document.querySelector(".credits-light");
    const attributionDark = document.querySelector(".credits-dark");

    if (asideLight.style.opacity == 1) {
        asideLight.style.opacity = 0;
        asideDark.style.opacity = 1;

        attributionLight.style.display = "none";
        attributionDark.style.display = "block";
    } else {
        asideLight.style.opacity = 1;
        asideDark.style.opacity = 0;

        attributionLight.style.display = "block";
        attributionDark.style.display = "none";
    }
}

setTheme();
document.querySelector('.theme-toggle').addEventListener('click', () => {
    setTheme();
    changeIcon();
    changeBackground();
})
