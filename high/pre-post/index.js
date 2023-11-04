const fichier = require('./Fichier');
const Nom1='serie1.txt';
const Nom2='serie2.txt';
const Nom3='Somme.txt';
let File1 = new fichier(Nom1);
let File2 = new fichier(Nom2);
let File3 = new fichier(Nom3);

File1.MAJSynhrone('starky et hutch \n');
File2.MAJSynhrone('mission impossible \n');
// console.log(File1.contenu);
// File1.Affiche2();
// console.log('--------maj file3---------')
File3.MAJSynhrone(File1.contenu);
File3.MAJSynhrone(File2.contenu);
// console.log('--------contenu file3---------')
File3.Affiche();
