

import mongoose from 'mongoose';


const infoSchema = new mongoose.Schema({
    email: String,
    current_datetime: String,
    github_url: String
});

const Info = mongoose.model("Info", infoSchema);

export default Info;