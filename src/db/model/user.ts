import { ObjectId } from "mongodb";

export class users {
  constructor(
    public name: string,
    public avatar?: string,
    public rating?: number,
    public no_telp?: string,
    public no_wa?: string,
    public _id?: ObjectId,
    public online?: boolean,
    public visitedRoom?: string,
    public webFcmToken?: string,
    public lastOnline?: Date
  ) {}
}

export interface IUser {
  name: string;
  avatar: string;
  rating: number;
  no_telp: string;
  no_wa: string;
  _id: ObjectId;
  online: boolean;
  visitedRoom: string;
  webFcmToken: string;
  lastOnline: Date;
}
