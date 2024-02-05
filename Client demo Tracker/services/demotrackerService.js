
const { Request, Response } = "express";
const demotracker = require("../models/Demotrackermodel");
const { ObjectId } = require("mongodb");

require('dotenv').config();

const demotrackerService={
    async viewdemoTracker(req){
        const documents = await demotracker.findAll();
        return (documents);
    },

    async deletedemoTracker(req){
        const documents = await demotracker.findoneandUpdate(req);
        return (documents);
    },

    async createdemoTracker(req){
        if((!req.ClientName || req.ClientName.trim() === '') && (!req.ContactPerson || req.ContactPerson.trim() === '') && (!req.Email || req.Email.trim() === '') && (!req.ContactNumber || req.ContactNumber.trim() === '') && (!req.MeetingType || req.MeetingType.trim() === '')){
            return ('All Fields are required');
        }
        else{
            const documents = await demotracker.Createdemo(req)
            return (documents);
        }
    },

    async viewonedemoTracker(req){
        const documents = await demotracker.viewonedemo(req)
        return (documents);
    }

}

module.exports = demotrackerService;