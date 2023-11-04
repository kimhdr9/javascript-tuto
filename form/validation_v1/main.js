function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    // zone pour les messages d'erreur
    var error_message = document.getElementById("error_message");
    var text='';
    // alert(name);
    error_message.style.display = "inline" ;
    if ( name.length <5){
        text= "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if ( phone.length !=10 || isNaN(phone) )
    {
        text= "Format phone number : 1234567890";
        error_message.innerHTML = text;
        return false;
    }
    if ( email.length < 6 || email.indexOf("@") == -1 )
    {
        text= "Format phone number : 1234567890";
        error_message.innerHTML = text;
        return false;
    }
    // alert(name.length);
    return true;
}
function validation2(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;

    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text='';
    alert(name);
    // if ( name.length <5){
    //     text= "Please Enter Valid Name";
    //     error_message.innerHTML = text;
    //     return false;
    // }
    // alert(name.length);
    // return false;
}