const Challenge = require("../models/challenge");
const {encrypt} =  require("../utils/encript")

const ChallengeCtrl = {};


ChallengeCtrl.getChallenges = async (req, res, next) => {
    try{
        const save = await Challenge.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

ChallengeCtrl.createChallenge = async (req, res, next) => {
    try{
        const body = {
            title:req.body.title,
            user_id:req.body.user_id,
            imgurl:req.body.imgurl,
            stage:req.body.stage,
            date:req.body.date,
            users:req.body.users,
            position:req.body.position,
        }
        var save= await Challenge.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }


};

ChallengeCtrl.getChallenge = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Challenge.findById(id);
        res.status(400).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

ChallengeCtrl.editChallenge = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Challenge.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}

};

ChallengeCtrl.deleteChallenge = async (req, res, next) => {
    try{
        await Challenge.findByIdAndRemove(req.params.id);
        res.json({ status: "Challenge Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = ChallengeCtrl;