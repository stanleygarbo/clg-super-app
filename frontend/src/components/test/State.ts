import { proxy } from "valtio";

interface data {
  count: number;
}

export const State = proxy<data>({
  count: 0
});