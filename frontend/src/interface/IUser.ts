// current logged in user
export interface IUser {
  id: string;
  username: string;
  role: string[];
  iat: number;
  exp: number;
}
