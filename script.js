function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'light' ? 'dark' : 'light';
  root.className = newTheme;
}

setTheme();
document.querySelector('.theme-toggle').addEventListener('click', () => {
    setTheme()
    console.log("Clicked")
})

