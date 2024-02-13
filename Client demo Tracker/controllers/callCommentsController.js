const {Request,Response} = "express";
const callCommentsService = require('../services/callCommentsService');

const callCommentsController = {
    async viewcomments(req,res){
        try {
            const {id} =req.body;
            console.log(req.id);

            const query = {
                id
            } 
            
            await callCommentsService.CallComments(query).then((data) => {
                if(data){
                    res.status(200).send(data);
                }
                else{
                    res.status(400).send("Error Occured");
                }
            })
        } catch (error) {
            res.status(400).send("Unexpected Error Occured");
        }
    },

    async addcomments(req,res){
        try {
            let {id, date, comments} = req.body;
            const query = {
                id,
                date,
                comments
            }
            await callCommentsService.addNewComments(query).then((data) => {
                if(data){
                    res.status(200).send(data);
                }
                else{
                    res.status(400).send("Error Occured");
                }
            })
        } catch (error) {
            res.status(400).send("Unexpected Error Occured");
        }
    }
}

module.exports = callCommentsController;