import { IUserRepositoryDetailParams } from "../user_repository/models/user";
import { ClientSession } from "mongoose";
import { IUserDocument, UserModel } from "database/models";

export class UserRepository {
  async detail(_params: IUserRepositoryDetailParams, _session: ClientSession | null): Promise<IUserDocument> {
    return UserModel.findOne({ id: _params.id }).session(_session).lean();
  }
}
