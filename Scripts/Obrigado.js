var url_atual = window.location.href;
window.onload = fatiaUrl(url_atual);
function fatiaUrl(url_atual){
    url_target = url_atual.split('/');
    if(url_target[4] == "Contribuir"){
        alert("Obrigado desde já por sua contribuicao ");
    }

}
