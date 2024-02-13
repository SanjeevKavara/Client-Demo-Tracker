const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const callCommentModel = new mongoose.Schema({
    call_tracker_primaryid : {
        type : String,
        required: true
    },
    DateComments : [
        {
            date : {type : Date , required: true, default: Date.now},
            comments : {type : String, required: true}
        }
    ]
})

const callComment = mongoose.model('Call_Comments',callCommentModel,'Call_Comments');

async function viewcallcomments(req){
    try {
        const documents = await callComment.findOne(
            {call_tracker_primaryid : req.id}
        )
        console.log(documents);
        return (documents);
    } catch (error) {
        return error;
    }
}

async function addComment(req){
    try {
        await callComment.findOneAndUpdate(
            {call_tracker_primaryid : req?.id},
            {$push : {DateComments : {date:req.date, comments:req.comments}}},
            {upsert : true, new:true }
        )
        return("Comments Updated Successfully");
    } catch (error) {
        return error;
    }
}

module.exports = {callComment,viewcallcomments,addComment};