const express = require('express');
const {
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase
} = require("./db");
const meetingsRouter = express.Router();


module.exports = meetingsRouter;
meetingsRouter.get('/', (req, res, next) => {
    res.status(200).send(getAllFromDatabase('meetings'))
    next();
})
meetingsRouter.post('/', (req, res, next) => {
    const addedItem = addToDatabase('meetings', req.body);
    if (addedItem) {
        res.status(201).send(addedItem);
        next();
    }
    res.status(409).send();
})
meetingsRouter.delete('/', (req, res, next) => {
    const deletedItem = deleteAllFromDatabase('meetings');
    if (deletedItem) {
        res.status(204).send();
        next();
    }
    res.status(404).send();
})