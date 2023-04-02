const User = require("../models/User");

const getAppConfig = (req, res) => {
    res.json({
        status : true,
        data: {}
    });
}

const addUser = async (req, res) => {
    let user = new User({
        phone: '7001051119',
        name: 'Satyajit Kumar',
        password: '0000000'
    });

    user = await user.save();

    res.json({
        status : true,
        data: user,
    })
}

const getUsers = async (req, res) => {
    try {
        let {id} = req.params;
        let user;
        if(id){
            // console.log(id);
            user = await User.findById(id)
        } else {
            user = await User.find();
        }
    
        res.json({
            status : true,
            data: user,
        })
    } catch(err) {
        console.log(err.message);
        res.json({
            status : false,
            data: {},
        });
    }
   
}

const HomeController = {
    getAppConfig,
    getUsers,
    addUser,
}

module.exports = HomeController;