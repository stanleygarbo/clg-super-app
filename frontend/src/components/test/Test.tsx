import { useSnapshot } from "valtio";
import { State } from "./State";
import { decrementCount, incrementCount } from "./Incrementer";

const Test = () => {
  const snap = useSnapshot(State);
  return (
    <div className="m-40">
      <h1>Count: {snap.count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default Test;
