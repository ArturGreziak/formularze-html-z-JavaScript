const promocje = document.getElementsByName('promocja');
const dodatki = document.getElementsByName('dodatek');

function okreslDodatki(){
    if(promocje[0].checked){
        dodatki[2].checked = true;
    }
    if(promocje[1].checked){
        dodatki[1].checked = true;
    }
    if(promocje[2].checked){
        dodatki[0].checked = true;
    }
}

    okreslDodatki();

    promocje[0].onchange = okreslDodatki;
    promocje[1].onchange = okreslDodatki;
    promocje[2].onchange = okreslDodatki;

