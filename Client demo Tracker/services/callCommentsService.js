const {Request,Response} = "express";
const callComments = require('../models/callCommentsModels');

require('dotenv').config();


const callCommentsService = {
    async CallComments(req){
        try {
            const documents = await callComments.viewcallcomments(req);
            const commentsArr = []
            documents?.DateComments.map((ele) => commentsArr.push(ele))
            const descDocuments = commentsArr.reverse();
            const finalResponse = descDocuments.slice(0,3);
            return (finalResponse);
        } catch (error) {
            return error;
        }
    },

    async addNewComments(req){
        try {
            const documents = await callComments.addComment(req);
            return (documents);
        } catch (error) {
            return error;
        }
    }
}

module.exports = callCommentsService;