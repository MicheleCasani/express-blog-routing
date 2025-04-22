// importo express
const express = require('express')

// importo router
const router = express.Router();

// importo i dati dei post
const posts = require('../data/data.js')

// DEFINISCO LE ROTTE PER I POST

// index
router.get('/', (req, res) => {
    res.json(posts)
});

// show
router.get('/:id', (req, res) => {
    const post = posts.find(function (element) {
        return element.id == req.params.id
    });
    res.json(post)
});

// store
router.post('/', (req, res) => {
    res.json('creo un nuovo elemento')
});

// update (put)
router.put('/:id', (req, res) => {
    res.json('mdifico il post con id:' + req.params.id)
});

// modify (patch)
router.patch('/:id', (req, res) => {
    res.json('mdifica parziale del post con id:' + req.params.id)
});

// delete
router.delete('/:id', (req, res) => {
    res.json('elimino il post con id:' + req.params.id)
});

// esporto il router
module.exports = router;
