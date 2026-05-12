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

    if (asideLight.style.opacity == 1) {
        asideLight.style.opacity = 0;
        asideDark.style.opacity = 1;
    } else {
        asideLight.style.opacity = 1;
        asideDark.style.opacity = 0;
    }

}

setTheme();

document.querySelector('.theme-toggle').addEventListener('click', () => {
    setTheme();
    changeIcon();
})
