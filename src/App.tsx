import { AppProvider } from "./AppContext";

import { AppContainer } from "./AppContainer";
import "./App.css";

export const App = () => {
  return (
    <>
      <h2 className="app-title">Todo List</h2>
      <AppProvider>
        <AppContainer />
      </AppProvider>
    </>
  );
};
