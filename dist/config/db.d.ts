/**
 * Connect to MongoDB using Mongoose
 * The connection URI is determined by DEVELOPMENT_MODE flag:
 *  - If DEVELOPMENT_MODE is true → Use local MongoDB URI
 *  - Otherwise → Use MongoDB Atlas URI
 */
declare const connectDB: () => Promise<void>;
export default connectDB;
//# sourceMappingURL=db.d.ts.map