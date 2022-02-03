const express = require('express');
const {
    getAllFromDatabase,
    addToDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabaseById
} = require("./db");
const ideasRouter = express.Router();

module.exports = ideasRouter;
ideasRouter.get('/', (req, res, next) => {
    res.status(200).send(getAllFromDatabase('ideas'))
    next();
})
ideasRouter.post('/', (req, res, next) => {
    const addedItem = addToDatabase('ideas', req.body);
    if (addedItem) {
        res.status(201).send(addedItem);
        next();
    }
    res.status(409).send();
})
ideasRouter.get('/:ideaId', (req, res, next) => {
    const ideaId = req.params.ideaId;
    const item = getFromDatabaseById('ideas', ideaId)
    if (item) {
        res.status(200).send(item);
        next();
    }
    res.status(404).send();

})
ideasRouter.put('/:ideaId', (req, res, next) => {
    const updatedItem = updateInstanceInDatabase('ideas', req.body)
    if (updatedItem) {
        console.log(updatedItem)
        res.send(getFromDatabaseById('ideas', req.params.ideaId));
        next();
    }
    res.status(404).send();
})
ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deletedItem = deleteFromDatabaseById('ideas', req.params.ideaId);
    if (deletedItem) {
        res.status(204).send();
        next();
    }
    res.status(404).send();
})