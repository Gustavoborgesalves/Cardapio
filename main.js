// script.js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content');
    const navItems = document.querySelectorAll('.sidebar li');

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            sections.forEach(section => section.style.display = 'none');
            sections[index].style.display = 'block';

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Exibe a primeira seção ao carregar a página
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? 'block' : 'none';
    });
});
