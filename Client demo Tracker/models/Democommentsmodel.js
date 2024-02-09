const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const demoTrackerCommentsSchema = new mongoose.Schema({
    Demo_tracker_primaryid : {
        type : String,
        required: true
    },
    DateComments : [
        {
            date : {type : Date , required: true},
            comments : {type : String, required: true}
        }
    ]
});

const DemoTrackerComments = mongoose.model('Demo_Comments',demoTrackerCommentsSchema,'Demo_Comments');

async function viewDemoComments(req){
    try {
        const comments = await DemoTrackerComments.findOne(
            {Demo_tracker_primaryid : req.id}
        )
        return (comments);
    } catch (error) {
        return error;
    }
}

async function addNewComment(req){
    try {
        await DemoTrackerComments.findOneAndUpdate(
            {Demo_tracker_primaryid : req?.id},
            {$push :{DateComments:{date: req.date, comments: req.comments} }},
            {upsert : true, new : true }
        )
        return ("Updated Successfully");
    } catch (error) {
        return error;
    }
}


module.exports = {DemoTrackerComments,viewDemoComments,addNewComment}