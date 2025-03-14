export interface IRoomPost {
  building: string;
  room: string;
  floor: string;
}
export interface IRoomGet {
  _id: string;
  building: string;
  room: string;
  floor: number;
}
