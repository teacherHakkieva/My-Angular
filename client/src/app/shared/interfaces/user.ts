import { ICourse } from "./course";

export interface IUser{
_id:string;
username:string;
accessToken : string;
enrolledCourse:string[];
myCourse:ICourse[];
}