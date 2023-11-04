const btn=document.querySelector("#BoutonCompter");
const text=document.querySelector("#ZoneTexte");
const nbmots = document.querySelector("#Nombremots");

btn.addEventListener("click",()=>{
    //alert(123);
    console.log(text.value);
    const mots= text.value.split(' ');
    console.log(mots.length);
    nbmots.textContent=' le texte contient '+mots.length+' mots.';
})