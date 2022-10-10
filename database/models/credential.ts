import {model, Schema} from "mongoose";


export interface ICredentialDocument {
    id: string;
    email: string;
    password: string;
    user_id: string;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date
}

export const CredentialSchema = new Schema<ICredentialDocument> ({
    id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    is_deleted: {
        type: Boolean,
        required: true,
        default: false
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
export const CredentialModel = model<ICredentialDocument>("Credential", CredentialSchema);