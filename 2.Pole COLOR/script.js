function colorUpdate(){
    document.getElementById('color-text').value =
    document.getElementById('color').value;

    document.getElementById('color-background').style.backgroundColor =
    document.getElementById('color').value;
}

colorUpdate();

document.getElementById('color').onchange = function(){
    colorUpdate();
}

document.getElementById('res').onclick = function(){
    document.getElementById('colors-form').reset();
    colorUpdate();
}