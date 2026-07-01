import mongoose from "mongoose";


const analysisSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    url:{
        type: String,
        required: true,
        trim: true
    },
    normalizedUrl:{
        type: String,
        required: true,
        trim: true
    },
    status:{
        type: String,
        enum:[
            "processing",
            "completed",
            "failed"
        ],
        default: "processing"
    },
    score:{
        seo:{
            type: Number,
            default: 0,
        },
        geo:{
            type: Number,
            default: 0,
        },
        overall:{
            type: Number,
            default: 0,
        }
    },
    report:{
        type: mongoose.Schema.Types.Mixed,
        default: {},
    },
    error:{
        type: String,
        default: null
    }
}, {timestamps:true,versionKey: false,});

analysisSchema.index({
    user: 1,
    createdAt: -1,
});

const Analysis = mongoose.model("Analysis", analysisSchema);
export default Analysis;