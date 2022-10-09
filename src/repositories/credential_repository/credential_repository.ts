import { ICredentialRepositoryDetailParams } from "./models/credential";
import { ClientSession } from "mongoose";
import { CredentialModel, ICredentialDocument } from "database/models";

export class CredentialRepository {
  async detail(
    _params: ICredentialRepositoryDetailParams,
    _session: ClientSession | null = null
  ): Promise<ICredentialDocument> {
    return CredentialModel.findOne({ email: _params.email }).session(_session).lean();
  }
}
