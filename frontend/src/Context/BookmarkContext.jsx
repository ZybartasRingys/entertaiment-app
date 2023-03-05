import { createContext, useReducer } from "react";

export const BookmarkContext = createContext();

const initialState = {
  bookmarked: [],
};

export const bookmarkReducer = (state, action) => {
  switch (action.type) {
    case "SET BOOKMARK":
      return [...state, action.payload];
  }
};

export const bookmarkContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(bookmarkReducer, initialState);

  return <bookmarkContextProvider>{children}</bookmarkContextProvider>;
};
