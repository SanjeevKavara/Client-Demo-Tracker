const { Request, Response } = "express";
const demoComments = require('../models/Democommentsmodel');
const { ObjectId } = require("mongodb");

require('dotenv').config();

const demoCommentsService = {
    async viewComments(req){
        const documents = await demoComments.viewDemoComments(req);
        return documents;
    },

    async addcomment(req){
        const addComments = await demoComments.addNewComment(req);
        return addComments;
    }
} 

module.exports = demoCommentsService;