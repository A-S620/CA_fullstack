const express = require('express');
const {
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    addToDatabase,
    deleteFromDatabaseById
} = require("./db");
const minionsRouter = express.Router();


module.exports = minionsRouter;
minionsRouter.get('/', (req, res, next) => {
    res.status(200).send(getAllFromDatabase('minions'))
    next();
})
minionsRouter.post('/', (req, res, next) => {
    const addedMinion = addToDatabase('minions', req.body);
    if (addedMinion) {
        res.status(201).send(addedMinion);
        next();
    }
    res.status(409).send();
})
minionsRouter.get('/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const minion = getFromDatabaseById('minions', minionId)
    if (minion) {
        res.status(200).send(minion);
        next();
    }
    res.status(404).send();

})
minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body)
    if (updatedMinion) {
        console.log(updatedMinion)
        res.send(getFromDatabaseById('minions', req.params.minionId));
        next();
    }
    res.status(404).send();
})
minionsRouter.delete('/:minionId', (req, res, next) => {
    const deletedMinion = deleteFromDatabaseById('minions', req.params.minionId);
    if (deletedMinion) {
        res.status(204).send();
        next();
    }
    res.status(404).send();
})