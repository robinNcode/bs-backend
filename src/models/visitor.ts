import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
    },
    userAgent: {
        type: String,
        required: true,
        default: 'Unknown',
    },
    lastVisit: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Compound index to efficiently find visitor by IP + device
visitorSchema.index({ ip: 1, userAgent: 1 });

const Visitor = mongoose.model('Visitor', visitorSchema);

export default Visitor;
