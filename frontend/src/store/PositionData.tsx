import { proxy } from "valtio";

interface AppState {
  jobTitle: string;
  hourlyWage: number;
}

export const positionData = proxy<AppState>({
  jobTitle: "",
  hourlyWage: 0,
});
