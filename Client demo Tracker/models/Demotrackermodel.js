const mongoose = require('mongoose');

const demotrackerschema = new mongoose.Schema({
    ClientName: {
        type : String,
        require : true,
    },
    ContactPerson:{
        type : String,
        require : true,
    },
    Email:{
        type : String,
        require : true, 
    },
    ContactNumber:{
        type : Number,
        require:true,
    },
    Location : {
        type : String,
        require : true,
    },
    DemoDate: {
        type : Date,
        require : true,
    },
    MeetingType:{
        type: String,
        enum : ['Virtual', 'F2F'],
        default : 'Virtual'
    },
    DemoStatus :{
        type:String,
        enum:['Completed','Yet to Present'],
        default :'Yet to Present'
    }
})

const DemoTracker = mongoose.model('Demo_tracker',demotrackerschema,'Demo_tracker');

async function findAll(){
    try{
        const details = DemoTracker.find();
        return details;
    } catch (error) {
        throw error; 
      }
}

module.exports = {DemoTracker,findAll};