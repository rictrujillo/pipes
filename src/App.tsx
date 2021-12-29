import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./pages/Home";
import { theme } from "./theme";
import { Provider } from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
