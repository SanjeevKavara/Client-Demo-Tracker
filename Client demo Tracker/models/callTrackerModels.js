const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


const callTrackerSchema = new mongoose.Schema({
    clientName:{
        type : String,
        required: true
    },
    contactPerson: {
        type : String,
        required: true
    },
    contactNumber : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    location : {
        type : String,
        required: true
    },
    contactDate : {
        type : Date,
        required: true
    },
    callStatus : {
        type : String,
        enum : ['Willing', 'Not Willing', 'Open'],
        default: 'Open'
    },
    status : {
        type : String,
        required: true,
        default : 'Active'
    }
})


const callTracker = mongoose.model('Call_Tracker',callTrackerSchema,'Call_Tracker');

async function findCallDetails(searchText){
    try {
        let filter = { "status": "Active" };
        if (searchText) {
            filter.$or = [
                { "clientName": { $regex: searchText, $options: 'i' } },
                { "contactPerson": { $regex: searchText, $options: 'i' } },
                { "email": { $regex: searchText, $options: 'i' } },
                { "location": { $regex: searchText, $options: 'i' } },
                { "callStatus": { $regex: searchText, $options: 'i' } }
            ];
        }
        const details = await callTracker.find(filter);
        return (details);
    } catch (error) {
        return error;
    }
    
}

async function Createnewcall(req){
    try {
        const createCheck = await callTracker.findOne({
            $or:[{email : req.email},
                {contactNumber : req.contactNumber}
            ]
        })
        if(createCheck){
            return("User Already exixts");
        }
        else{
            await callTracker.create({
                clientName : req.clientName,
                contactPerson : req.contactPerson,
                contactNumber : req.contactNumber,
                email : req.email,
                contactDate : req.contactDate,
                location:req.location,
                callStatus: "Open",
                status : "Active"
            })
            return ("Call Created Successfully");
        }
    } catch (error) {
        return error;
    }
}

async function deleteonecall(req){
    try {
        await callTracker.findByIdAndUpdate(
            {_id : req.id},
            {$set:{status:"InActive"}}
        )
        return ("Call Deleted Successfully");
    } catch (error) {
        return error;   
    }
}

async function viewonecall(req){
    try {
        const documents = await callTracker.findById(
            {_id : req?.id}
        )
        return (documents);
    } catch (error) {
        return error;
    }
}


async function editonecall(req){
    try {
        await callTracker.findByIdAndUpdate(
            {_id : req?.id},
            {$set :{clientName : req.clientName,
                    contactPerson : req.contactPerson,
                    contactNumber : req.contactNumber,
                    email : req.email,
                    contactDate : req.contactDate,
                    location:req.location,
                    callStatus:req.callStatus}}
        )
        return ("Call Detail Updated Successfully");
    } catch (error) {
        return error;
    }
}

async function filtercall(req){
    const query1 = {};
    query1.status = "Active";
    if (req.contactDate){
        const demoDate = new Date(req.contactDate);
        // const endDate = new Date(demoDate.getFullYear(), demoDate.getMonth(), demoDate.getDate() + 1);
        query1.contactDate = demoDate ;
    } 
    if(req.location){
        query1.location = req.location;
    }
    if(req.callStatus){
        query1.callStatus = req.callStatus
    }
    try {
        const documents = await callTracker.find(query1);
        return (documents);
    } catch (error) {
        return error;
    }
}


module.exports = {callTracker,findCallDetails,Createnewcall,deleteonecall,viewonecall,editonecall,filtercall};