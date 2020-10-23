const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;

    let queryText = `UPDATE "gallery"
    SET "likes" = "likes" +1
    WHERE "id" = $1;`

    pool
        .query(queryText, [galleryId])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('error in PUT', error);
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "gallery" ORDER BY "id" ASC;';

    pool
        .query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in GET error', error);
            res.sendStatus(500);
        })
}); // END GET Route

//POST route
router.post('/', (req, res) => {
    console.log(req.body);
    let path = req.body.newImage.newPath;
    let description = req.body.newImage.newDescription;

    let queryText = `INSERT INTO "gallery" ("path", "description")
    VALUES($1, $2);`;

    pool
        .query(queryText, [path, description])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error in POST', error);
            res.sendStatus(500);
        })
})

//DELETE route
router.delete('/:id', (req, res) => {
    const deleteId = req.params.id;
    console.log('delete ID', deleteId);

    let queryText = `DELETE FROM "gallery"
    WHERE "id" = $1;`

    pool
        .query(queryText, [deleteId])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('error in delete', error);
            res.sendStatus(500);
        })
})

module.exports = router;