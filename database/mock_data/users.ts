import {IUserDocument} from "../models";

export const user: Omit<IUserDocument, "is_deleted" | "updated_at" | "created_at">[] = [
    {
        id: "100",
        email: "dev.haxuan@gmail.com",
    },
    {
        id: "101",
        email: "xuanhv@rectplus.jp"
    }
];