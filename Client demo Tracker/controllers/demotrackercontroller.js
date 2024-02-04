const { Request, Response } = "express";
const demotrackerservices = require("../services/demotrackerService");

const demoTrackercontroller ={
    async demodetails(req,res){
        try{
          await demotrackerservices.viewdemoTracker(req).then((data) => {
              if(data) {
                res.status(200).send(data);
              }else{
                res.status(400).send("Unexpected error")
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
    }
  
}

module.exports = demoTrackercontroller;
