let xhr = new XMLHttpRequest();
xhr.open('GET', "http://api.alquran.cloud/v1/quran/{{edition}}", true)
xhr.onload = function () {
    if (this.status == 200) {
        let data = JSON.parse(this.responseText).data.surahs;
        let count = 0;
        data.forEach(surah => {
            count++
            let node = document.createElement("P");
            node.classList.add('surah-name')
            let anchor = document.createElement('A');
            anchor.target = '_blank'
            let textnode = document.createTextNode(surah.name);
            anchor.appendChild(textnode);
            anchor.href = `https://surahquran.com/${count}.html`
            node.appendChild(anchor)
            document.getElementsByClassName('surahs-names')[0].appendChild(node);
            document.querySelector('.page-loader').classList.add('fade-out');
            document.querySelector('.page-loader').style.display = 'none';
        });
    } else {
        document.getElementById('sorry').classList.add('appear')
    }
}
xhr.send();


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