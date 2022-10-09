import {model, Schema} from 'mongoose';

export interface IUserDocument {
    id: string;
    email: string;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
}

export const UserSchema = new Schema<IUserDocument>({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true
    },
    is_deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});
export const UserModel = model<IUserDocument>("User", UserSchema);