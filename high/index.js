const companies = [
    { names : "Compagny One", category : "Finance", start : 1981, end : 2003},
    { names : "Compagny Two", category : "Retail", start : 1998, end : 2008},
    { names : "Compagny Three", category : "Auto", start : 1968, end : 2009},
    { names : "Compagny Four", category : "Technology", start : 1978, end : 2010},
    { names : "Compagny Five", category : "Finance", start : 1987, end : 2011},
    { names : "Compagny Seven", category : "Retail", start : 1998, end : 2018},
    { names : "Compagny Six", category : "Auto", start : 1999, end : 2014},
    { names : "Compagny 8", category : "Auto", start : 2001, end : 2021}
]

const ages =[ 12,15,18,23,12,44,34,65,9,19,21];

//  boucle classique
if ( false) {
    for (let i=0; i< companies.length ;i++)
    {
        console.log(companies[i].names);
    }
}
//forEach
// 
if ( false)
{
    companies.forEach(element => {
        console.log(element.names);
    });
}
//filter

let  canDrink =[];
if ( false )
{
    for ( let i=0; i<ages.length;i++){
        if ( ages[i] >= 21)
        {
            canDrink[i]='yes';
        }
        else{
            canDrink[i]='No';
        }
        console.log(`age of ${ages[i]} can drink : ${canDrink[i]}`);
    }
}
if ( false)
{
    //  création d'un tableau
    let canDrink = [] ; 
    //  affiche les ages dépassant 21 
    for ( let i=0; i<ages.length; i++)
    {
        if( ages[i] >= 21){
            // ajoute les ages de plus de 21
            canDrink.push(ages[i]);
        }
    }
}
const limit = 19; 
//  un seul paramètre
// const canDrink2 = ages.filter( age =>{
//     if ( age >= limit){
//         return true;
//     }
// })

// encore plus court 
const canDrink2 = ages.filter( age => age >= limit);

// console.log(canDrink2.sort());

const retailCompagnies = companies.filter( compagny => compagny.category ==='Retail' );

// console.log(retailCompagnies);

// Get 90s Compagnies

const ninetyCompagnies = companies.filter ( compagny => (compagny.start > 1989 && compagny.start < 2000) );

// console.log(ninetyCompagnies);

//map
//sort
//reduce

function Hello(name){
    console.log('Hello '+ name);
}

Hello('Rot');

const age2=ages.map(age => age*age);

console.log(age2);

const age3=ages.filter(age => age > 21)
.map( age => 2*age )
.sort((a,b) => b-a) ;

console.log(age3);