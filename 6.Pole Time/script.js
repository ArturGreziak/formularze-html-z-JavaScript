function godzinaZFormularza(){
let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if(h.toString().length < 2) h = '0' + h;
    if(m.toString().length < 2) m = '0' + m;
    if(s.toString().length < 2) s = '0' + s;

    document.getElementById('godzina').value = h + ':' + m + ':' + s;
}

setInterval(godzinaZFormularza, 1000);