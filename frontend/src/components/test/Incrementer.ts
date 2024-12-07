import { State } from "./State";

// Function to increment the count
export const incrementCount = () => {
  State.count += 1;
  console.log(`Count incremented: ${State.count}`);
};

// Function to decrement the count
export const decrementCount = () => {
  State.count -= 1;
  console.log(`Count decremented: ${State.count}`);
};