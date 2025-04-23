import { createContext, useReducer } from "react";

export const CounterContext = createContext(null);

function counterReducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
