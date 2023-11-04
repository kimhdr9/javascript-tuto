let btn = document.getElementById("btntodo");

function Supprime(id) {
    var myobj = document.getElementById(id);
    console.log(id);
    myobj.remove();
  }

btn.addEventListener('click',()=>{
    var id = Math.random().toString(36).substring(7);
    const btn_delete =`<button class="delete" onclick="Supprime(${id})"><i class="fas fa-trash-alt"></i></button>`;
    var jour = new Date;
    var jourlisible = jour.toLocaleString();
    var monchoix = document.getElementById("monchoix");
    let todo =document.getElementById("todo");
    // alert(todo.value);
 // crée un nouvel élément div
    var newDiv = document.createElement("div");
    //  ajout d'un id obligatoire
    newDiv.id = id;
    // modification de la classe    // 
    newDiv.className ="notification "+monchoix.value;  
  // et lui donne un peu de contenu
    newDiv.innerHTML = btn_delete;
    newDiv.innerHTML += jourlisible + ' : '+ todo.value;                // Insert text
    document.getElementById("debut-liste").appendChild(newDiv);  
  // ajoute le nœud texte au nouveau div créé
//   document.body.appendChild(newContent);
  // ajoute le nouvel élément créé et son contenu dans le DOM
//   var currentDiv = document.getElementById('debut-liste');
//   document.body.insertBefore(newDiv, currentDiv);
})