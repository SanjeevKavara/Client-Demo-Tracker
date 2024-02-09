const { Request, Response } = "express";
const demoComments = require('../models/Democommentsmodel');
const { ObjectId } = require("mongodb");

require('dotenv').config();

const demoCommentsService = {
    async viewComments(req){
        try { 
            const documents = await demoComments.viewDemoComments(req);
            const commentsArr = []
            documents?.DateComments.map((ele) => commentsArr.push(ele))
            const descDocuments = commentsArr.reverse();
            const finalResponse = descDocuments.slice(0,3);
            return (finalResponse);
        } catch (error) {
            return error;
        }
    },

    async addcomment(req){
        try {
            const addComments = await demoComments.addNewComment(req);
            return addComments;
        } catch (error) {
            return error;
        }
    }
} 

module.exports = demoCommentsService;