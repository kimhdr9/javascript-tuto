// sélection des objets de la page index
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list  = document.getElementById("list");
const input = document.getElementById("input");

// elements internes à l'objet list

let LIST = [] ; // tableau d'objets  
let id = 0 ;   // identificateur incrémental

// variables iconiques pour l'état des éléments de "list"

const CHECK="fa-check-circle";
const UNCHECK="fa-circle-thin";
const LINE_THROUGH="lineThrough";

// fonction todo appel d'input et ajoute un element dans l'objet "list"

function addToDo(toDo,id,done,trash){

    if ( trash){ return;  }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH :"";

    const text =`   <li class="item">
                    <i class="fa ${DONE}" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o" job="delete" id="${id}"></i>
                    </li>`;

    const position = "beforeend";
    // place l'élément en fin de liste.
    list.insertAdjacentHTML(position,text);
}

// associer (écouter) la commande "Entrée" à l'objet "input"
// 
document.addEventListener("keyup",function(event){
    // code pour la frappe sur le clavier
    if( event.keyCode === 13){
        const toDo = input.value;
        // si le champ "toDo" n'est pas vide
        if(toDo){
            // appel à la fonction addToDo
            addToDo(toDo,id,false,false);
            LIST.push(
                {
                    name : toDo,
                    id : id,
                    done : false,
                    trash : false
                }
            )
            // 
            id++;
        }
        // vide l'objet "input"
        input.value="";
    }

})