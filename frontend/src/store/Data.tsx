import { proxy } from "valtio";

interface AppState {
  isOpen: boolean;
}

export const Data = proxy<AppState>({
  isOpen: true,
});
