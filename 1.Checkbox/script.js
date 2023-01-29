let options = document.getElementsByClassName('product');

document.getElementById('info').onclick = function(){

    let message = "";
    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            message += options[i].value + "\n";
        }
    }

    if(message.length > 0){
        alert("Twój koszyk zawiera następujace produkty: \n" + message)
    } else {
        alert("Twój koszyk jest pusty!")
    }

}