function aktualizuj(){
    document.getElementById('value').value = document.getElementById('range').value;
}

function resetuj(){
    document.getElementById('form').reset();
    aktualizuj();
}

document.getElementById('range').onchange = function(){
     aktualizuj();
}