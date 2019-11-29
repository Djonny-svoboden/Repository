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
document.getElementById('tabs').onclick = function(ev) {
    var target = ev.target;
    if (target.className == "tab") {
        for (var i = 0; i < tab.lenght; i++) {
            if (target == tab[i]) {
                showTabCont(i);
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('ruinbord');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}