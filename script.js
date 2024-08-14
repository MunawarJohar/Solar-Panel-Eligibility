// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your information has been submitted successfully.');
        form.reset();
    });
});

document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
});