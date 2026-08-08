/**
 * Luke Navarra Portfolio - Interactive JavaScript
 * Floating Nav ScrollSpy & Copy Email Feature
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Floating Nav ScrollSpy
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const updateActiveNav = () => {
        const scrollPosition = window.scrollY + 180;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    // 2. Copy Email to Clipboard
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const emailText = document.getElementById('email-text');

    if (copyEmailBtn && emailText) {
        copyEmailBtn.addEventListener('click', () => {
            const email = copyEmailBtn.getAttribute('data-email') || 'lukenavarra8@gmail.com';
            
            navigator.clipboard.writeText(email).then(() => {
                const originalText = emailText.textContent;
                emailText.textContent = 'Copied to Clipboard! ✓';
                copyEmailBtn.style.backgroundColor = '#22c55e';
                copyEmailBtn.style.color = '#000000';

                setTimeout(() => {
                    emailText.textContent = originalText;
                    copyEmailBtn.style.backgroundColor = '';
                    copyEmailBtn.style.color = '';
                }, 2200);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        });
    }
});
