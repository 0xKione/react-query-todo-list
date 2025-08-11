import { createContext, useContext, useMemo, useState } from "react";

import { TodoItem } from "./types";

type AppContextType = {
  todos: TodoItem[];
  selectedTodoId?: number;
  hideCompleted: boolean;
};

type AppDispatchContextType = {
  setTodos: (todos: TodoItem[]) => void;
  setSelectedTodoId: (todoId: number | undefined) => void;
  setHideCompleted: (hide: boolean) => void;
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppContext = createContext<AppContextType>({
  todos: [],
  selectedTodoId: undefined,
  hideCompleted: false,
});

export const AppDispatchContext = createContext<AppDispatchContextType>({
  setTodos: () => {},
  setSelectedTodoId: () => {},
  setHideCompleted: () => {},
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [selectedTodoId, setSelectedTodoId] = useState<number | undefined>();
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);

  const hideTodosAndDeselect = (hide: boolean) => {
    if (hide) {
      const selectedTodo = todos.find((todo) => todo.id === selectedTodoId);
      if (selectedTodo?.completed) {
        setSelectedTodoId(undefined);
      }
    }

    setHideCompleted(hide);
  };

  const appContextValue = useMemo(
    () => ({
      todos,
      selectedTodoId,
      hideCompleted,
    }),
    [todos, selectedTodoId, hideCompleted]
  );

  const appDispatchContextValue = useMemo(
    () => ({
      setTodos,
      setSelectedTodoId,
      setHideCompleted: hideTodosAndDeselect,
    }),
    [setTodos, setSelectedTodoId, hideTodosAndDeselect]
  );

  return (
    <AppContext.Provider value={appContextValue}>
      <AppDispatchContext.Provider value={appDispatchContextValue}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export const useAppDispatchContext = () => useContext(AppDispatchContext);
