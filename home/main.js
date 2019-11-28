var tab;
var tabCont;

function hideContent() {
    for (var i = 0; i < tabCont.lenght; i++) {
        tabCont[i].classList.remove('show')
        tabCont[i].classList.add('hide')
        tab[i].classList.add('ruibord')
    }
}