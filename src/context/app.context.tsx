// DEPENDENCIES
import React, { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

interface AppContextPropsType {
  location: Object;
}

export const AppContext = createContext<AppContextPropsType>({
  location: {},
});

export const AppContextProvider: React.FC<any> = ({ children }: any) => {
  const location = useLocation();

  return (
    <AppContext.Provider
      value={{
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextPropsType => useContext(AppContext);
