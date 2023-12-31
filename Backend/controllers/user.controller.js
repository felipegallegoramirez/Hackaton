const User = require("../models/user");
const {encrypt} =  require("../utils/encript")

const UserCtrl = {};


UserCtrl.getUsers = async (req, res, next) => {
    try{
        const save = await User.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

UserCtrl.createUser = async (req, res, next) => {
    try{
        const body = {
            name:req.body.name,
            email:req.body.email,
            password: await encrypt(req.body.password),
        }
        var save= await User.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }


};

UserCtrl.getUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await User.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

UserCtrl.editUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}}


UserCtrl.addFollow = async (req, res, next) => {
    try{
        const { id } = req.params;
        let userdb = await User.findById(id);
        userdb.follows = userdb.follows.push(req.body)
        save = await User.findByIdAndUpdate(id, {$set: userdb}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}}

UserCtrl.addFollower = async (req, res, next) => {
    try{
        const { id } = req.params;
        let userdb = await User.findById(id);
        userdb.followers = userdb.followers.push(req.body)
        save = await User.findByIdAndUpdate(id, {$set: userdb}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}}




UserCtrl.deleteUser = async (req, res, next) => {
    try{
        await User.findByIdAndRemove(req.params.id);
        res.json({ status: "User Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = UserCtrl;