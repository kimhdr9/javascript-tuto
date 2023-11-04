const express =  require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');
const app = express();
// si une variable est définie ce sera PORT sinon 5000
const PORT =  process.env.PORT || 5000;

// get function
//  no doctype avec la méthode send
// avec la méthode sendFile => oblige de charger manuellement toutes les pages ( ok pour les serveurs statiques)
if ( false) {
    app.get('/',(req,res)=>{
        // res.send('<h1> bonjour vous </h1>');   methode 1
        res.sendFile(path.join(__dirname,'public','index.html')); // methode 2
    })
}

// Init middleware
if (false){app.use(logger);}

if (false){
        // Get All Members
        app.get('/api/members',(req,res)=>{
            res.json(members);
        });

        // Get Single Member
        app.get('/api/members/:id',(req,res)=>{
            const found = members.some(member => member.id === parseInt(req.params.id));

            if (found){
                res.json(members.filter(member => member.id === parseInt(req.params.id)));
            } else {
                res.status(400).json({msg : `No member with the id of ${req.params.id}`})
            }
        });
}


// avec cette troisième méthode on indique seulement le répertoire
// bien plus rapide sans express
// set static serveur
app.use(express.static(path.join(__dirname,'public')));

// dans ce cas  use( chemin1, chemin2)
// chemin1 = chemin url
// chemin2 = chemin du serveur
app.use('/api/members',require('./routes/api/members'));

//  pour lancer node index
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});
// sur le serveur le msg cannot GET /
// / root of the page no route exists 