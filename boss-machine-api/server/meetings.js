const express = require('express');
const {
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase, createMeeting
} = require("./db");
const meetingsRouter = express.Router();


module.exports = meetingsRouter;
meetingsRouter.get('/', (req, res, next) => {
    res.status(200).send(getAllFromDatabase('meetings'))
    next();
})
meetingsRouter.post('/', (req, res, next) => {
    const createdMeeting = addToDatabase('meetings', createMeeting())
    res.status(201).send(createdMeeting);
    next();

})
meetingsRouter.delete('/', (req, res, next) => {
    const deletedItem = deleteAllFromDatabase('meetings');
    if (deletedItem) {
        res.status(204).send();
        next();
    }
    res.status(404).send();
})