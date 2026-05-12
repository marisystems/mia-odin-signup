function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
}

function changeIcon() {
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
