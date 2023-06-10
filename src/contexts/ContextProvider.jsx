import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  // state activeMenu
  const [activeMenu, setActiveMenu] = useState(true);

  // state intialState
  const [isClicked, setIsClicked] = useState(initialState);

  // state screenSize
  const [screenSize, setScreenSize] = useState(undefined);

  // logic handleClick
  const handleClick = (clicked) => {
    // setIsClicked mengCopy initialState, dari properti clicked (parameter) dan di ubah menjadi true
    setIsClicked({ ...initialState, [clicked]: true });
    // jika salah satu dari object initialState di clicked maka akan menjadi true
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
