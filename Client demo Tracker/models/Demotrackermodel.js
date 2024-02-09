const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

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
        enum : ['Virtual', 'F2F']
    },
    DemoStatus :{
        type:String,
        enum:['Completed','Yet to Present'],
        default :'Yet to Present'
    },
    Status:{
        type:String,
        require:true,
        default: 'Active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const DemoTracker = mongoose.model('Demo_tracker',demotrackerschema,'Demo_tracker');


async function findAll(searchText) {
    try {
        let filter = { "Status": "Active" };
        if (searchText) {
            filter.$or = [
                { "ClientName": { $regex: searchText, $options: 'i' } },
                { "ContactPerson": { $regex: searchText, $options: 'i' } },
                { "Email": { $regex: searchText, $options: 'i' } },
                { "Location": { $regex: searchText, $options: 'i' } },
                { "MeetingType": { $regex: searchText, $options: 'i' } },
                { "DemoStatus": { $regex: searchText, $options: 'i' } },
                // Add more fields as needed
            ];
        }
        const details = await DemoTracker.find(filter);
        return details;
    } catch (error) {
        throw error;
    }
}

async function findoneandUpdate(query){
    try {
        await DemoTracker.findByIdAndUpdate(
            {_id :query?.id},
            {$set:{Status:"InActive"}},
        );
        return ("Deleted Successfully"); 
    } 
    catch (error) {
        throw error; 
    }
}

async function Createdemo(query){
    try {
        const check = await DemoTracker.findOne({
            $or:[{Email : query.Email},
                {ContactNumber : query.ContactNumber}
            ]
        })
        if(check){
            return("User Already exixts");
        }
        else{
            await DemoTracker.create(
                {
                    ClientName : query.ClientName,
                    ContactPerson : query.ContactPerson,
                    Email : query.Email,
                    ContactNumber : query.ContactNumber,
                    Location : query.Location,
                    DemoDate : query.DemoDate,
                    MeetingType : query.MeetingType,
                    DemoStatus : "Yet to Present" ,
                    Status : "Active"
                }
            )
            return ("Created Successfully");
        }
    } catch (error) {
        throw error
    }
}

async function viewonedemo(req){
    try {
        const detail = DemoTracker.findById({_id : req?.id})
        return detail;  
    } catch (error) {
        throw error; 
    }
}

async function editonedemo(req){
    try {
        await DemoTracker.findByIdAndUpdate(
            {_id: req?.id },
            {$set: {
                ClientName : req.ClientName,
                ContactPerson : req.ContactPerson,
                Email : req.Email,
                ContactNumber : req.ContactNumber,
                Location : req.Location,
                DemoDate : req.DemoDate,
                MeetingType : req.MeetingType,
                DemoStatus:req.DemoStatus
            }}
        )
        return ("Updated Successfully");
    } catch (error) {
        throw error;
    }
}

async function filterdetail(req){

    const query1 = {};
    query1.Status = "Active";
    if (req.DemoDate){
        const demoDate = new Date(req.DemoDate);
        const endDate = new Date(demoDate.getFullYear(), demoDate.getMonth(), demoDate.getDate() + 1);
        query1.DemoDate = endDate ;
    } 
    if(req.Location){
        query1.Location = req.Location;
    }
    if(req.MeetingType){
        query1.MeetingType = req.MeetingType;
    }
    if(req.DemoStatus){
        query1.DemoStatus = req.DemoStatus
    }
    try {
        const documents = await DemoTracker.find(query1);
        return documents;
    } catch (error) {
        return error;
    }
}

module.exports = {DemoTracker,findAll,findoneandUpdate,Createdemo,viewonedemo,editonedemo,filterdetail};
