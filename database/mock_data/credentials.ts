import {ICredentialDocument} from "../models";
import {hashPassword} from "../../src/libs/bcrypt";

export const credential: Omit<ICredentialDocument, "is_deleted" | "created_at" | "updated_at">[] = [
    {
        id: "1",
        user_id: "100",
        email: "dev.haxuan@gmail.com",
        password: hashPassword("PASSWORD25@")
    },
    {
        id: "2",
        user_id: "101",
        email: "xuanhv@rectplus.jp",
        password: hashPassword("PASSWORD03@")
    }
];
