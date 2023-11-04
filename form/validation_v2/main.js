function validation(type){
    // le type peut être user ou pass
    var iconid="";
    var stateid="";
    var nameid="";

    nameid = type +"name";
    iconid =type+"icon";
    stateid=type+"state";
    
    var name = document.getElementById(nameid);
    var state = document.getElementById(stateid);
    var icon = document.getElementById(iconid);

    // error_message.style.display = "inline" ;
    if ( name.value.length <5){
        name.className="input is-danger";
        //  information sous la saisie
        state.innerHTML = type+" est incorrect";
        state.className= "help is-danger";
        state.style.display = "inline";
        // icon à droite de la saisie
        icon.className="fas fa-exclamation-triangle";
        icon.style.display = "inline";

        return false;
    }
    else{
        name.className="input is-success";
        //  information sous la saisie
        state.innerHTML = type+" est correct";
        state.className= "help is-success";
        state.style.display = "inline";
        // icon à droite de la saisie
        icon.className="fas fa-check";
        icon.style.display = "inline";
    }
    // alert(name.length);
    return false;
}
