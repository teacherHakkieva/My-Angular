import { IUser } from './user';

export interface ICourse {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  createdAt: string;
  owner: string;
  userCount: number;
  users: IUser;
}