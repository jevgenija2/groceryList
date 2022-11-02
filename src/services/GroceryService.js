const GroceryItem = require("../models/GroceryItem");
const {v4: uuidv4} = require("uuid");

class GroceryService {
    constructor() {
    }

    groceryList = new Array();

    checkIfItemExists(itemId) {
        return itemId.length === 36 ?
            this.groceryList.some(listItem => listItem.id === itemId) :
            this.groceryList.some(listItem => listItem.item === itemId)
    }

    getItemlist(){
        return this.groceryList;
    }

    addItem (groceryItem) {
        let newItem = new GroceryItem(uuidv4(), groceryItem);
        this.groceryList.push(newItem);

        return newItem;
    }
}

module.exports = GroceryService