const {Request,Response} = "express";
const callTrackerService = require('../services/callTrackerService');


const Calltrackercontroller = {
    async callDetails(req,res){
        try {
            const {limit, offset} = req.query;
            if(limit == undefined || offset == undefined ){
                res.status(400).send("Bad Request");
                return
            }
            await callTrackerService.callDetails(req,limit, offset).then((data) => {
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

    async callCreate(req,res){
        try {
            const {clientName,contactPerson,contactNumber,email,location,contactDate} = req.body;
            const query = {
                clientName,
                contactPerson,
                contactNumber,
                email,
                location,
                contactDate
            }
            await callTrackerService.createCall(query).then((data) => {
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

    async calldelete(req,res){
        try {
            const query ={
                id : req.params.id
              }
            await callTrackerService.deleteCall(query).then((data) => {
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

    async viewOneCall(req,res){
        try {
            const query ={
                id : req.params.id
            }
            await callTrackerService.viewOneCallDetail(query).then((data) => {
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

    async editoneCall(req,res){
        try {
            const {id,clientName,contactPerson,contactNumber,email,location,contactDate,callStatus} =req.body;
            const query = {
                id,
                clientName,
                contactPerson,
                contactNumber,
                email,
                location,
                contactDate,
                callStatus
            }
            await callTrackerService.editonecalldetail(query).then((data) => {
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

    async filterCall(req,res){
        try {
            const {contactDate,location,callStatus} = req.body;
            const query = {
            contactDate,
            location,
            callStatus
        }
            await callTrackerService.filterdata(query).then((data) => {
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

module.exports = Calltrackercontroller;