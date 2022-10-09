import mongoose from "mongoose";
import logger from "jet-logger";
import { UserModel, CredentialModel } from "./models";
import { user } from "./mock_data/users";
import { credential } from "./mock_data/credentials";

export async function DBConnect() {
  return await mongoose.connect(process.env.DATABASE_URL as string).catch(() => {
    logger.err("connect mongoose error");
  });
}

export async function DBDisconnect() {
  return await mongoose.connection.close().catch(() => {
    logger.err("disconnect mongoose error");
  });
}

export const load = async () => {
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    await UserModel.deleteMany().session(session);
    await CredentialModel.deleteMany().session(session);

    await UserModel.insertMany(user, { session });
    await CredentialModel.insertMany(credential, { session });

    await session.commitTransaction();
    await session.endSession();
  } catch (e) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const remove = async () => {
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    await UserModel.deleteMany().session(session);
    await CredentialModel.deleteMany().session(session);

    await session.commitTransaction();
    await session.endSession();
  } catch (e) {
    await session.abortTransaction();
    await session.endSession();
  }
};
