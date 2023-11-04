var fs = require('fs');

//  Création de fichier
function Creation(FichierNom)
{
    fs.open(FichierNom, 'w', (err,file) => {
    if (err) throw err;
    console.log(`Création de ${FichierNom}`);
    });
}

// Mise à jour
function MAJ(FichierNom,Text)
{
    fs.appendFile(FichierNom, Text, err => {
    if (err) throw err;
    console.log(`Mise à jour de ${FichierNom}`);
  });
}
//  Renome le fichier Depart
function Renome(NomDepart,NomFin)
{
    fs.rename(NomDepart, NomFin, err => {
        if (err) throw err;
        console.log('File Renamed!');
      });
}
// change le contenu du fichier
function Remplace(FichierNom,Text)
{
    fs.writeFile(FichierNom, Text, err => {
        if (err) throw err;
        console.log('Replaced!');
      });
}

function Supprime(FichierNom)
{
    fs.unlink(FichierNom, function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
}

exports.Creation = Creation ;
exports.MAJ = MAJ ;
exports.Renome = Renome ;
exports.Remplace = Remplace ;
exports.Supprime = Supprime ;