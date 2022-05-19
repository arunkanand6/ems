import { Provider } from "react-redux";
import configureStore from "./redux/store/store";
import RootRouter from "./routers/RootRouter";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}

export default App;
