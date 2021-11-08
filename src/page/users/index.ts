import { ObjectId } from "mongodb";
import { collections } from "./../../db";
import { users } from "./../../db/model";

export const FindUser = async (uid: string) => {
  try {
    const query = { uid: uid };

    const checkUser = (await collections.users?.findOne(query)) as users;
    return checkUser;
  } catch (error) {
    return (error as Error).message;
  }
};
