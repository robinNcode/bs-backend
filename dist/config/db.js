import mongoose from 'mongoose';
/**
 * Connect to MongoDB using Mongoose
 * The connection URI is determined by DEVELOPMENT_MODE flag:
 *  - If DEVELOPMENT_MODE is true → Use local MongoDB URI
 *  - Otherwise → Use MongoDB Atlas URI
 */
const connectDB = async () => {
    const isDevMode = process.env.DEVELOPMENT_MODE === 'true';
    const dbHost = isDevMode
        ? process.env.MONGO_LOCAL_URI
        : process.env.MONGO_ATLAS_URI;
    if (!dbHost) {
        console.error('❌ MongoDB URI is not defined in environment variables.');
        process.exit(1);
    }
    console.log(`🔗 Connecting to MongoDB at: ${dbHost}`);
    try {
        await mongoose.connect(dbHost);
        console.log('✅ MongoDB connected successfully.');
    }
    catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map