// version javascript de touch
const fs=require('fs'); 
const argv = process.argv.slice(2);

const NameFile =argv[0];
let modetest=false;

if (modetest)
{
    // en mode test affiche NameFile
    console.log(NameFile);
}
else
{
    fs.writeFile(NameFile,'',err =>console.log(err));
}