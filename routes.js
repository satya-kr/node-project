const express = require('express')
const cors = require('cors');
const HomeController = require('./http/controllers/HomeController');
const app = express();

app.use(express.urlencoded({
    extended : true,
}));

app.use(cors({
    origin : "*"
}))

app.use(express.json());

const version = "/v1"
const endpoint = "/api" + version

app.get('/', (req, res) => {
    res.json({
        status : true,
        message: "Welcome"
    })
})

app.get(endpoint+'/app-config', HomeController.getAppConfig);

const user = express.Router();

user.get('/', HomeController.getUsers);
user.get('/view/:id', HomeController.getUsers);
user.get('/create', HomeController.addUser);

app.use(endpoint + "/user" , user)

app.listen(
    process.env.APP_PORT, "0.0.0.0", () => {
        console.log(`Backend started at port http://localhost:${process.env.APP_PORT}`)
    }
)

