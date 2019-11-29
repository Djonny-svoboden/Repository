var tab; // заголовок вкладки
var tabs; // блок содержащий контент вкладки

window.onload = function() {
    tabs = document.getElementsByClassName('tabs');
    tab = document.getElementsByClassName('tab');
    hideTabs(1);
}

function hideTabs(a) {
    for (var i = a; i < tabs.length; i++) {
        tabs[i].classList.remove('show');
        tabs[i].classList.add("hide");
        tab[i].classList.remove('ruibord');
    }
}
document.getElementById('tabs').onclick = function(event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabs(i);
                break;
            }
        }
    }
}

function showTabs(b) {
    if (tabs[b].classList.contains('hide')) {
        hideTabs(0);
        tab[b].classList.add('ruibord');
        tabs[b].classList.remove('hide');
        tabs[b].classList.add('show');
    }
}