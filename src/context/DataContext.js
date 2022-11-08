import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({children}) => {

  const [isLoggedIn] = useState(!!localStorage.getItem('token'));

  const [dispatch, setDispatch] = useState();

  return (

    <DataContext.Provider value={{ dispatch, setDispatch, isLoggedIn }}>
      {children}
    </DataContext.Provider>

  );
}
export default DataProvider