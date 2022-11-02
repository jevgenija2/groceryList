## Run project
To run project use this command: npm run dev
## Endpoint: /groceryList/add-item
1. Request body is validated:
   2. Request body is only allowed to be in this format:
      { "item": "value" }
    All other parameters are not permitted, e.g.:
    { "item": "value", "otherParameter": "value"} OR { "otherParameter": "value" } OR {} will result in "400 Bad Request" with descriptive message.
   3. Value length of parameter "item" cannot be less than 2 char and more than 32
4. For the new grocery item created an uuid is added
5. Json object is returned in the response.
6. Duplicate values are not allowed

## Endpoint: /groceryList/check-item/:itemId
1. In Path parameter either item name (e.g. apple) with character length: 2 - 32 or uuid v4 are permitted, otherwise: 400 Bad request with descriptive message.
2. Response returns either true (status: 200 OK) or false (status: 404 Not Found)

## Endpoint: /groceryList/get-list
1. Will return the whole grocery-list in Json format (status: 200 OK), or empty object