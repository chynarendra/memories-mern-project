import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date()
    }
},
    {
        writeConcern: {
            // w: 'majority',
            // j: true,
            // wtimeout: 1000
        }
    });

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;