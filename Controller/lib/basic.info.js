

import Info from '../../Model/info.model.js';

import dotenv from 'dotenv';
dotenv.config();

export const info = async(req, res) =>{
    const basicInfo = {
        email: process.env.EMAIL,
        current_datetime: new Date().toISOString(),
        github_url: process.env.GITHUB_URL
    }

    try {
        const basicInfoDocument = new Info(basicInfo);
        await basicInfoDocument.save();
        res.status(200).json(basicInfo);
    } catch (error) {
        console.log("Error retrieving the user basic info", error);
        res.status(500).json({message: "Server error", error});
        
    }
};