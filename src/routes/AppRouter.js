import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../redux";
import Dashboard from "../App";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/anfitrion/cevicheria_ejemplo/carta"
            element={<Dashboard />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
