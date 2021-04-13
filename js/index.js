window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.page-loader').classList.add('fade-out');
        document.querySelector('.page-loader').style.display = 'none';
    }, 600)
})

/* nav bar toggler */
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', toggleNav);

function toggleNav() {
    navToggler.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open');
}
/*X nav bar toggler X*/

/* close the nav when clicking on a link */
document.addEventListener('click', function (e) {
    if (e.target.closest('.nav-link')) {
        toggleNav();
    }
})
/*X close the nav when clicking on a link X*/