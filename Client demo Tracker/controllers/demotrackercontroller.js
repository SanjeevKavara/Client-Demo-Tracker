const { Request, Response } = "express";
const demotrackerservices = require("../services/demotrackerService");

const demoTrackercontroller ={
    async demodetails(req,res){
        try{
          const {limit, offset} = req.query;
          if(limit == undefined || offset == undefined ){
            res.status(400).send("Bad Request");
            return
          }
          await demotrackerservices.viewdemoTracker(req, limit, offset).then((data) => {
              if(data) {
                res.status(200).send(data);
              }else{
                res.status(400).send("Unexpected error");
            }
          });     
        }
        catch(error){
          res.status(400).send("Unexpected error occured");
        }
    },
    async deomdelete(req,res){
      const query ={
        id : req.params.id
      }
      try{
        await demotrackerservices.deletedemoTracker(query).then((data) => {
            if(data) {
              res.status(200).send(data);
            }else{
              res.status(400).send("Unexpected error");
          }
        });     
      }
      catch(error){
        res.status(400).send("Unexpected error occured")
      }
    },
    async demoCreate(req,res){
    
      try {
        let {ClientName,ContactPerson,Email,ContactNumber,Location,DemoDate,MeetingType} = req.body;
        const query ={
          ClientName, 
          ContactPerson,
          Email,
          ContactNumber,
          Location,
          DemoDate,
          MeetingType
        }
        await demotrackerservices.createdemoTracker(query).then((data) =>{
          if(data) {
            res.status(200).send(data);
          }else{
            res.status(400).send("error");
          }
        });
      } catch (error) {
        res.status(400).send("Unexpected error occured");  
      } 
    },
    async viewonedetail(req,res){
      const query ={
        id : req.params.id
      }
        try {
        await demotrackerservices.viewonedemoTracker(query).then((data) => {
          if(data) {
            res.status(200).send(data);
          }else{
            res.status(400).send("Unexpected error")
        }
        });
      } catch (error) {
        res.status(400).send("Unexpected error occured");
      }
    },
    async editonedetail(req,res){
      try {
        let {id,ClientName,ContactPerson,Email,ContactNumber,Location,DemoDate,MeetingType,DemoStatus} = req.body
        const query = {
          id,
          ClientName, 
          ContactPerson,
          Email,
          ContactNumber,
          Location,
          DemoDate,
          MeetingType,
          DemoStatus
        }
        await demotrackerservices.editonedemoTracker(query).then((data) => {
          if(data) {
            res.status(200).send(data);
          }else{
            res.status(400).send("Unexpected error")
          }
        });
      } catch (error) {
        res.status(400).send("Unexpected error occured");
      }
      
    },
    async filterdata(req,res){
      let {DemoDate, Location, MeetingType, DemoStatus} = req.body;
      const query = {
        DemoDate, 
        Location, 
        MeetingType, 
        DemoStatus
      }
      try {
        await demotrackerservices.filterdetails(query).then((data) => {
          if(data){
            res.status(200).send(data);
          }else{
            res.status(400).send("Unexpected error")
          }
        });
      } catch (error) {
        res.status(400).send("Unexpected error occured");
      }
    }
}

module.exports = demoTrackercontroller;
