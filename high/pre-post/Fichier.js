var fs = require('fs');

class Fichier {

    constructor(FichierNom)
    {
      this.FichierNom=FichierNom;
      this.Creation();
      this.contenu='';
    }

//  Création de fichier
   Creation()
    {
      fs.open(this.FichierNom, 'w', (err,file) => {
      if (err) throw err;
      console.log(`Création de ${this.FichierNom}`);
      });
    } 

// Mise à jour asynchrone
  MAJ(Text)
  {
      fs.appendFile(this.FichierNom, Text, err => {
      if (err) throw err;
      this.contenu+=Text;
      this.Info(Text);
    });
  }
  // Mise à jour asynchrone
  MAJSynhrone(Text)
  {
    try {
      const data = fs.appendFileSync(this.FichierNom,Text);
      this.contenu+=Text;
      this.Info(Text);
      //file written successfully
    } catch (err) {
      console.error(err)
    }
  }
//  Renome le fichier Depart
  Renome(NomFin)
  {
    fs.rename(this.FichierNom, NomFin, err => {
        if (err) throw err;
        this.FichierNom = NomFin;
        console.log('File Renamed!');
      });
  }
// change le contenu du fichier
  Remplace(Text)
  {
    fs.writeFile(this.FichierNom, Text, err => {
        if (err) throw err;
        this.contenu =Text;
        console.log('Replaced!');
      });
  }

  Supprime()
  {
    fs.unlink(this.FichierNom, function (err) {
        if (err) throw err;
        console.log('File deleted!');
        this.FichierNom='';
        this.contenu='';
      });
  }
  // affiche le contenu
  Affiche()
  {
    fs.readFile(this.FichierNom, 'utf8' , (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  };
  Info(Text)
  {
    console.log('contenu : ' +this.contenu);
    console.log('Text : ' +Text);
    console.log(`Mise à jour de ${this.FichierNom}`);
  }
}

module.exports = Fichier ;
