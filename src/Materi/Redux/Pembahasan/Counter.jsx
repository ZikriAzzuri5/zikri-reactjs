import { useSelector, useDispatch } from "react-redux";
import {
  decrementWithCheckingAction,
  increment,
} from "../../../App/features/Counter/actions";

const Counter = () => {
  let { value } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrementWithCheckingAction(1))}>
        -
      </button>{" "}
      <span>{value}</span>
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};

export default Counter;
