document.addEventListener("DOMContentLoaded", function() {
    // Sections to be shown/hidden
    const sections = document.querySelectorAll('.section');
    const navbarLinks = document.querySelectorAll('#navbar a');

    // Show only the selected section
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('hidden');
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
                section.classList.add('hidden');
            }
        });
    }

    // Add click event to navbar links
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Typing effect for name
    const name = "Olivier Ishimwe";
    const nameElement = document.querySelector('.home-content h1');
    let index = 0;

    function typeLetter() {
        if (index < name.length) {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(typeLetter, 150);
        }
    }

    typeLetter();

    // Contact form validation and submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById('contact-form').reset();
    });
});
