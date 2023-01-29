let options = document.forms.shopping.elements['sopping-select'];
let selectedOptions = options.selectedOptions;

document.getElementById('info').onclick = function(){
    let message = "";

    for(let i = 0; i < selectedOptions.length; i++){
        message += selectedOptions[i].value + "\n";
    }

    if(selectedOptions != 0){
        alert(message);
    }

}