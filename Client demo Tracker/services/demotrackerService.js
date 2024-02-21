
const { Request, Response } = "express";
const demotracker = require("../models/Demotrackermodel");
const { ObjectId } = require("mongodb");

require('dotenv').config();

const demotrackerService={
    async viewdemoTracker(req, limit , offset){
        try {
            const {searchtext} = req.body;
            const documents = await demotracker.findAll(searchtext);
            const uptoIndex = (Number(limit) + Number(offset)) 
            const finalResponse = documents.slice(offset, uptoIndex);
            return (finalResponse);
        } catch (error) {
            return error;
        }
    },

    async deletedemoTracker(req){
        try {
            const documents = await demotracker.findoneandUpdate(req);
            return (documents);
        } catch (error) {
            return error;
        }
    },

    async createdemoTracker(req){
        try {
            if ((!req.ClientName || req.ClientName.trim() === '') && (!req.ContactPerson || req.ContactPerson.trim() === '') && (!req.Email || req.Email.trim() === '') &&  (!req.ContactNumber || req.ContactNumber.trim() === '') && (!req.MeetingType || req.MeetingType.trim() === '')&&(req.ContactNumber.trim().length !== 10)) {
                return ('All Fields are required');
            }
            else{
                const documents = await demotracker.Createdemo(req);
                return documents;
            }  
        } catch (error) {
            return error;
        }
    },
    

    async viewonedemoTracker(req){
        try {
            const documents = await demotracker.viewonedemo(req)
            return (documents);
        } catch (error) {
            return error;
        }
    },

    async editonedemoTracker(req){
        try {
            if((!req.ClientName || req.ClientName.trim() === '') && (!req.ContactPerson || req.ContactPerson.trim() === '') && (!req.Email || req.Email.trim() === '') && (!req.ContactNumber || req.ContactNumber.trim() === '') && (!req.MeetingType || req.MeetingType.trim() === '')){
                return ('All Fields are required');
            }
            else{
                const documents = await demotracker.editonedemo(req)
                return (documents);
            }
        } catch (error) {
            return error;
        }
    },

    async filterdetails(req){
        try {
            const details = await demotracker.filterdetail(req);
            return details;
        } catch (error) {
            return error;
        }
    }

}

module.exports = demotrackerService;