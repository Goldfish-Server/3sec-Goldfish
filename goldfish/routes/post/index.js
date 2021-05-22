const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');

const {
    Post,
    Group,
    Question
} = require('../../models');

//글조회 
router.get("/", async(req,res) => {
    try{
        const posts = await Post.findAll();

        return res.json({
            status: "200",
            success: "성공",
            message: "글조회 성공",
            data: posts,
        });
    }catch(error){
        res.status(500).json({
            status: "500",
            success: "실패",
            message: "서버 에러",
        });
    }    
})






//좋아요 
router.put("/:postIdx", async(req,res) => {
    try{
        const index = req.params.postIdx;
        const post = await Post.findOne({ postIdx: index });

    if(!post){
        return res.status(400).json({
            status: "400",
            success: "실패",
            msg:"정보가 없습니다",
        });
    }

    post.likeCount++;
    await post.save();

    return res.json({
        status: "200",
        success: "성공",
        message: "좋아요 성공",
    });

    }catch(error){
        res.status(500).json({
            status: "500",
            success: "실패",
            message: "서버 에러",
        });
    }
    
})


module.exports = router;
