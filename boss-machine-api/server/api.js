const express = require('express');
const {getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase} = require("./db");
const apiRouter = express.Router();


module.exports = apiRouter;
const minions = getAllFromDatabase('minions')
apiRouter.get('/minions', (req, res, next) => {
    res.status(200).send(minions)
    next();
})
apiRouter.post('/minions', (req, res, next) => {
})
apiRouter.get('/minions/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const minion = getFromDatabaseById('minions', minionId)
    if (minion) {
        res.status(200).send(minion);
        next();
    }
    res.status(404).send();

})
apiRouter.put('/minions/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body)
    if (updatedMinion) {
        const minion = getFromDatabaseById('minions', req.params.minionId)
        console.log(minion)
        res.status(204).send(minion);
        next();
    }
    res.status(404).send();
})
apiRouter.delete('/minions/:minionId', (req, res, next) => {

})