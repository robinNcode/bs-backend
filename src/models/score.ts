import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
    },
    score: {
        type: Number,
        required: true,
        min: 0,
    },
    badges: {
        type: [String],
        default: [],
    },
    challengesCompleted: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Score = mongoose.model('Score', scoreSchema);

export default Score;
