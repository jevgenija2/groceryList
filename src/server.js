const express = require('express')

const app = express()
const PORT = 8081
const groceryListRouter = require("./routes/groceryListRoute")
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use("/groceryList", groceryListRouter);
app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT)
});