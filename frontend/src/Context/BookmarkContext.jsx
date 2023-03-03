import { createContext, useReducer, useEffect } from "react";

export const BookmarkContext = createContext();

export const bookmarkReducer = (state, action) => {
  switch (action.type) {
    case "SET BOOKMARK":
      return;
  }
};
