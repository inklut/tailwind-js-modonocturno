// 3:
let theme = localStorage.getItem('theme');
let userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
let toggleDark = document.getElementById('toggle-dark');
let toggleLight = document.getElementById('toggle-light');
let htmlElem = document.querySelector('html');

if (theme === 'dark' || (!theme && userPrefersDark.matches)) {
    htmlElem.classList.add('dark');
    toggleDark.classList.add('visible');
    toggleLight.classList.remove('hidden');
} else {
    toggleLight.classList.add('visible');
    toggleDark.classList.remove('hidden');
}

toggleLight.addEventListener('click', function () {
    localStorage.setItem('theme', 'light');
    htmlElem.classList.remove('dark');
    toggleDark.classList.add('visible');
    toggleDark.classList.remove('hidden');
    toggleLight.classList.add('hidden');
    toggleLight.classList.remove('visible');
});

toggleDark.addEventListener('click', function () {
    localStorage.setItem('theme', 'dark');
    htmlElem.classList.add('dark');
    toggleLight.classList.add('visible');
    toggleLight.classList.remove('hidden');
    toggleDark.classList.add('hidden');
    toggleDark.classList.remove('visible');
});
