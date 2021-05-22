const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const ut = require('../../modules/util');
const rm = require('../../modules/responseMessage');
const sc = require('../../modules/statusCode');
const {
    Post,
    Group,
    Question
} = require('../../models');

router.post('/',  async (req, res) => {
    const {
        groupName,
    } = req.body;

    try {

        const group = await Group.create({
            groupName
        });

        return res.status(sc.OK).send(ut.success(sc.OK, "성공"));
    } catch (err) {
        console.log(err);
        return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
    }
});

router.get('/',  async (req, res) => {
    try {
        const group = await Group.findAll();
        return res.status(sc.OK).send(ut.success(sc.OK, "성공",group));
    } catch (err) {
        console.log(err);
        return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
    }
});
module.exports = router;

