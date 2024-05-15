const mooon = document.querySelector('.moon');
const sunns = document.querySelector('.sun');

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
        sunns.style.display = 'none';
        mooon.style.display = 'flex';
    }
    else {
        mooon.style.display = 'none';
        sunns.style.display = 'flex';
    }
})