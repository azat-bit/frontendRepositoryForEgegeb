// Mobil menü için JavaScript (dropdown mobilde de çalışsın diye)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const header = document.querySelector('header');

    mobileMenuIcon.addEventListener('click', function() {
        header.classList.toggle('mobile-menu-open');
    });
});
