import React, { createContext, useContext, useEffect, useReducer } from "react";

const BookstoreContext = createContext();

const initialState = {
  cart: [],
  wishlist: [],
  user: null,
  darkMode: false, // Initial state for dark mode
};

function bookstoreReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "HYDRATE":
      return { ...state, ...action.payload }; // Handle state hydration
    default:
      return state;
  }
}

export function BookstoreProvider({ children }) {
  const [state, dispatch] = useReducer(bookstoreReducer, initialState);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("bookstoreState"));
    if (savedState) {
      dispatch({ type: "HYDRATE", payload: savedState });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookstoreState", JSON.stringify(state));

    // Apply dark mode class to the body
    if (state.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [state]);

  return (
    <BookstoreContext.Provider value={{ state, dispatch }}>
      {children}
    </BookstoreContext.Provider>
  );
}

export function useBookstore() {
  const context = useContext(BookstoreContext);
  if (!context) {
    throw new Error("useBookstore must be used within a BookstoreProvider");
  }
  return context;
}
