// importo express
const express = require('express')

// inizializzo express nella variabile app
const app = express();

// definisco il numero di porta, ovvero 3000
const port = 3000;

// definisco la rotta base 
app.get('/', (req, res)=>{
    res.send('hello world')
})

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port,()=>{
    console.log(port);
});
