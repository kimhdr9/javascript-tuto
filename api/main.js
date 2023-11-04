

// let input = document.querySelector("#input");

class Ville{
    constructor(element){
        this.element = element;
        this.city= this.element.querySelector("#affiche");
        this.input = this.element.querySelector("#input");
    }
    affiche(){
        let codepostal = this.input.value;
        if ( codepostal.length == 5){
             console.log(this.input.value);
            let url=`https://geo.api.gouv.fr/communes?codePostal=${codepostal}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;

            fetch(url).then(response => response.json())
            .then(data=> {
                    let affichage;
                    console.log(data);
                    if (data.length > 0)
                    {
                        affichage = '<ul>';
                        for (let city of data ) {
                            affichage += `<li>${city.nom} -- population : ${city.population}</li>`;
                        }
                        affichage += '</ul>';
                    }
                    else
                    {
                        affichage= `ce code <strong>${this.input.value}</strong> n'existe pas`;
                    }
                    this.city.innerHTML=affichage;
                }
            ).catch((err) => console.log('Erreur : ' + err));    
        }
    }
}
let formulaire = document.querySelector("#formulaire");
City = new Ville(formulaire);

City.input.addEventListener('input',()=>{
    City.affiche();
});