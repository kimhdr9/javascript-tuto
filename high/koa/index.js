const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();
const router = new KoaRouter();
app.use(json()); // utilise le module koa-json
app.use(router.routes()).use(router.allowedMethods());

//  en mode API

// app.use( async ctx => (ctx.body = {msg : 'Bonjour le monde !'}));

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// Router
router.get('/test',ctx =>(ctx.body =' page de test'));
router.get('/about',ctx =>(ctx.body =' page à propos'));



app.listen(3000,() => console.log('serveur lancé ...'));