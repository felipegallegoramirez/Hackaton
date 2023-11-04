const Post = require("../models/post");
const User = require("../models/user")

const {encrypt} =  require("../utils/encript")

const PostCtrl = {};


PostCtrl.getPosts = async (req, res, next) => {
    try{
        const save = await Post.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

PostCtrl.createPost = async (req, res, next) => {
    try{
        const body = {
            title:req.body.title,
            user_id:req.body.user_id,
            data:req.body.data,
            comentario:req.body.comentario,
            username:req.body.username
        }
        var user= User.findById(body.user_id)


        var save= await Post.create(body);
        if(!user.publication){
            user.publication=[save._id]
        }else{
            user.publication.push(save._id)
        }

        User.findByIdAndUpdate(user._id,user)
        res.status(200).send(save)
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }


};

PostCtrl.getPost = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Post.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

PostCtrl.editPost = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Post.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}

};

PostCtrl.deletePost = async (req, res, next) => {
    try{
        await Post.findByIdAndRemove(req.params.id);
        res.json({ status: "Post Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};


PostCtrl.getPostsByUser = async (req, res, next) => {
    try{
        const save = await Post.find({ user_id:req.params.id  });
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

module.exports = PostCtrl;