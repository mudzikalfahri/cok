import React, { useContext, useState, useReducer } from "react";

export const states = {
  openModalDetail: false,
};

export const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload],
      };
    case "DEL_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "START":
      return {
        loading: true,
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, setState] = useState(states);
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};
