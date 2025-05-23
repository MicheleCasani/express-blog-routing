// importo express
const express = require('express')

// inizializzo express nella variabile app
const app = express();

// definisco il numero di porta, ovvero 3000
const port = 3000;

// importo router
const postsRouter = require('./routers/posts.js')

// instrada le richieste che iniziano con /posts al router postsRouter
app.use('/posts', postsRouter)

// importo la cartella public, che contiene file statici
app.use('/imgs', express.static('public/imgs'));

// definisco la rotta base 
app.get('/', (req, res)=>{
    res.send('Homepage')
})

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port,()=>{
    console.log(port);
});


