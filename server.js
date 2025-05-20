const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const UserController = require('./controller/UserController');
const FoodTypeController = require('./controller/FoodTypeController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/user/signIn', (req, res) => UserController.signIn(req, res));

app.post('/api/foodType/create', (req, res) => FoodTypeController.create(req, res));
app.post('/api/foodType/list', (req, res) => FoodTypeController.list(req, res));
app.delete('/api/foodType/delete/:id', (req, res) => FoodTypeController.delete(req, res));
app.delete('/api/foodType/remove/:id', (req, res) => FoodTypeController.remove(req, res));
app.put('/api/foodType/update/:id', (req, res) => FoodTypeController.update(req, res));


app.listen(3001, () => {
    console.log("server runnging port 3001");
})