const { Request, Response } = "express";
const demoCommentsService = require('../services/demoCommentsService');

const demoCommentsController = {
    async viewComments(req,res){
        try {
            let {id} = req.body;
            const query = {
                id
            }
            await demoCommentsService.viewComments(query).then((data) => {
                if(data){
                    res.status(200).send(data);
                }
                else{
                    res.status(400).send("Unexpected error");
                }
            })
        } catch (error) {
            res.status(400).send("Unexpected error occured");
        }
    },
    async addNewComments(req,res){
        try {
            let {id, date, comments} = req.body;
            const query = {
                id,
                date,
                comments
            }
            await demoCommentsService.addcomment(query).then((data => {
                if(data){
                    res.status(200).send(data);
                }
                else{
                    res.status(400).send("Unexpected error");
                }
            }))
        } catch (error) {
            res.status(400).send("Unexpected error occured");
        }
    }
}

module.exports = demoCommentsController;
