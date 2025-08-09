import mongoose from 'mongoose';
declare const Visitor: mongoose.Model<{
    createdAt: NativeDate;
    ip: string;
    browser: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    ip: string;
    browser: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    createdAt: NativeDate;
    ip: string;
    browser: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    ip: string;
    browser: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    ip: string;
    browser: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    ip: string;
    browser: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Visitor;
//# sourceMappingURL=visitor.d.ts.map