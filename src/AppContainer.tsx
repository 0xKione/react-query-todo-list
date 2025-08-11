import { useEffect } from "react";

import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

import { getData } from "./data";
import { useAppDispatchContext } from "./AppContext";

export const AppContainer = () => {
  const { setTodos } = useAppDispatchContext();

  useEffect(() => {
      const loadData = async () => {
        const data = await getData();
        setTodos(data);
      };
  
      loadData();
    }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  );
};
