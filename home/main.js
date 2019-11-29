var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки

window.onload = function() {
    tabContent = document.getElementsByClassName('tabs');
    tab = document.getElementsByClassName('tab');
    hideTabs(1);
}

function hideTabs(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
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
    if (tabContent[b].classList.contains('hide')) {
        hideTabs(0);
        tab[b].classList.add('ruibord');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}