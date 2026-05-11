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

setTheme();

document.querySelector('.theme-toggle').addEventListener('click', () => {
    setTheme();
    changeIcon();
})

