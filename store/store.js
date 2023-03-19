/* eslint-disable no-case-declarations */
import { createContext, useReducer } from 'react';

export const storeContext = createContext('');

const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload;

      const existItems = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      const cartItems = existItems
        ? state.cart.cartItems.map((item) =>
            item.name === newItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      return { ...state, cart: { ...state.cart, cartItems } };

    default:
      return state;
  }
}

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};
