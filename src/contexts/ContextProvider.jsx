import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  // state
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export default useStateContext = () => useContext(StateContext);
