const express = require('express');
const {
    getAllFromDatabase,
    addToDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require("./db");
const ideasRouter = express.Router();

module.exports = ideasRouter;
ideasRouter.get('/', (req, res, next) => {
    res.status(200).send(getAllFromDatabase('ideas'))
    next();
})
ideasRouter.post('/', (req, res, next) => {
    const addedMinion = addToDatabase('ideas', req.body);
    if (addedMinion) {
        res.status(201).send(addedMinion);
        next();
    }
    res.status(409).send();
})
ideasRouter.get('/:ideaId', (req, res, next) => {
    const ideaId = req.params.ideaId;
    const minion = getFromDatabaseById('ideas', ideaId)
    if (minion) {
        res.status(200).send(minion);
        next();
    }
    res.status(404).send();

})
ideasRouter.put('/:ideaId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('ideas', req.body)
    if (updatedMinion) {
        console.log(updatedMinion)
        res.send(getFromDatabaseById('ideas', req.params.ideaId));
        next();
    }
    res.status(404).send();
})
ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deletedMinion = deleteFromDatabasebyId('ideas', req.params.ideaId);
    if (deletedMinion) {
        res.status(204).send();
        next();
    }
    res.status(404).send();
})