// Elements du DOM
const formulaire = document.getElementById("inputBox");
const essayerBtn = document.getElementById("essayerBtn");
const rejouerBtn = document.getElementById("rejouer");
const input = document.getElementById("number");
const body = document.getElementsByTagName("body")[0];
const vies = document.querySelector(".vies");
const message = document.getElementById("message");

console.log(essayerBtn);
console.log(message.innerText);
console.log(input.value);


// Modèle de coeurs

const coeurVide='<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein='<ion-icon name="heart"></ion-icon>';

// Fond

const bgFroid = 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiede = 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)';
const bgChaud = 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)';
const bgBrulant = 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)';
const bgWin='linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)';
const bgLoose = 'linear-gradient(to top, #e6b980 0%, #eacda3 100%)';


// PLAY

function Play(){
    
}
