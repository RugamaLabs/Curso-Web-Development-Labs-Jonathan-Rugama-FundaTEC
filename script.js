const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('darkmode');

    if (body.classList.contains('darkmode')) {
        themeToggleBtn.textContent = '☀️ Día';
    } else {
        themeToggleBtn.textContent = '🌙 Noche';
    }
});