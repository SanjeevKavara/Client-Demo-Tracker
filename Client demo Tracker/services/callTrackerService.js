const { Request, Response } = "express";
const callTracker = require('../models/callTrackerModels');


const callTrackerService = {
    async callDetails(req, limit , offset){
        try {
            const {searchtext} = req.body;
            const documents = await callTracker.findCallDetails(searchtext);
            const uptoIndex = (Number(limit) + Number(offset)) 
            const finalResponse = documents.slice(offset, uptoIndex);
            return (finalResponse);
        } catch (error) {
            return error;
        }
         
    },

    async createCall(req){
        try {
            if((!req.clientName || req.clientName.trim() === '') && (!req.email || req.email.trim() === '') && (!req.contactNumber || req.contactNumber.trim() === '')){
                return ('All Fields are required');
            }
            else if(req.contactNumber.trim().length !== 10){
                return ('Invalid Phone Number');
            }
            else{
                const create = await callTracker.Createnewcall(req);
                return (create);
            }
        } catch (error) {
            return error;
        }
    },

    async deleteCall(req){
        try {
            const deletecall = await callTracker.deleteonecall(req);
            return (deletecall);
        } catch (error) {
            return error;
        }
    },

    async viewOneCallDetail(req){
        try {
            const document = await callTracker.viewonecall(req);
            return (document);
        } catch (error) {
            return error;
        }
    },

    async editonecalldetail(req){
        try {
            if((!req.clientName || req.clientName.trim() === '') && (!req.email || req.email.trim() === '') && (!req.contactNumber || req.contactNumber.trim() === '')){
                return ('All Fields are required');
            }
            else if(req.contactNumber.trim().length !== 10){
                return ('Invalid Phone Number');
            }
            else{
                const document = await callTracker.editonecall(req);
                return (document);
            }
        } catch (error) {
            return error;
        }
    },

    async filterdata(req){
        try {
            const documents = await callTracker.filtercall(req);
            return (documents);
        } catch (error) {
            return error;
        }
    }
}

module.exports = callTrackerService;