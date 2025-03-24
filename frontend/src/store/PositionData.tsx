import { proxy } from "valtio";
import { IPositionGet, IPositionPost } from "../interface/IPosition";

export const positionPostData = proxy<IPositionPost>({
  jobTitle: "",
  hourlyWage: 0,
});

export const positionGetData = proxy<IPositionGet>({
  _id: "",
  jobTitle: "",
  hourlyWage: 0,
});
