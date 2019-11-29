var tab; // заголовок вкладки
var tabCont; // блок содержащий контент вкладки

window.onload = function() {
    tabCont = document.getElementsByClassName('tabs');
    tab = document.getElementsByClassName('tab');
    hideTabs(1);
}

function hideTabs(a) {
    for (var i = a; i < tabCont.length; i++) {
        tabCont[i].classList.remove('show');
        tabCont[i].classList.add("hide");
        tab[i].classList.remove('ruibord');
    }
}