import { Provider } from "react-redux";
import Counter from "./Pembahasan/Counter";
import store from "../../App/store";
const Redux = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Redux;
