
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
    }
}

module.exports = demotrackerService;