document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggleTheme');
    const body = document.body;

    toggleThemeButton.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
