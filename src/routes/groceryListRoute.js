const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser');
const Joi = require("joi")
const GroceryService = require("../services/GroceryService")

const groceryService = new GroceryService();
const jsonParser = bodyParser.json()

const schemaGetItem = Joi.alternatives().try(Joi.string().trim().min(2).max(32), Joi.string().guid({version: 'uuidv4'}));

const schemaGetList = Joi.object().keys({
    item: Joi.string().min(2).max(32).required(),
});


router.get("/check-item/:itemId", jsonParser, (request, response) => {
    const { error } = schemaGetItem.validate(request.params.itemId)

    if (error)
        return response.status(400).send(error.details[0].message);

    let itemFound = groceryService.checkIfItemExists(request.params.itemId);
    let statusCode = itemFound ? 200 : 404;

    return response.status(statusCode).send(itemFound);
});

router.get("/get-list", jsonParser, (request, response) => {
    return response.status(200).send(JSON.parse(JSON.stringify(groceryService.getItemlist())));
});

router.post("/add-item", jsonParser,
    (request, response) => {
        const { error } = schemaGetList.validate(request.body);

        if (error)
            return response.status(400).send(error.details[0].message);

        if (groceryService.getItemlist().some(listItem => listItem.item === request.body.item)) {
            return response.status(409).send({
                message: "Item already exists in the list."
            })
        }

        return response.status(201).send(groceryService.addItem(request.body.item))
})

module.exports = router;