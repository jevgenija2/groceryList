class GroceryItem {
    constructor(id, item) {
        this.id = id;
        this.item = item;
    }

    getId() {
        return this.id;
    }

    getItem() {
        return this.item;
    }
}

module.exports = GroceryItem;