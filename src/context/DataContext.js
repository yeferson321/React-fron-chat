import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({children}) => {

  const [isLoggedIn] = useState(!!localStorage.getItem('token'));

  const [ContextMessageText, setContextMessageText] = useState();

  return (

    <DataContext.Provider value={{ ContextMessageText, setContextMessageText, isLoggedIn }}>
      {children}
    </DataContext.Provider>

  );
}
export default DataProvider