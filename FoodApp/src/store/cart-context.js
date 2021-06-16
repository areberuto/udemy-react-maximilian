import { useState, useReducer } from "react";
import React from "react";

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newTotalAmount =
      +state.totalAmount + action.item.price * action.item.quantity;
    const existingItem = state.items.findIndex((i) => i.id === action.item.id);
    let updatedArray;
    if (existingItem >= 0) {
      updatedArray = [...state.items];
      updatedArray[existingItem].quantity += action.item.quantity;
    } else {
      updatedArray = state.items.concat(action.item);
    }
    return {
      items: updatedArray,
      totalAmount: newTotalAmount.toFixed(2),
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingItem = state.items.find((i) => i.id === action.id);
    const newTotalAmount = +state.totalAmount - existingItem.price;
    let updatedArray;
    if (existingItem.quantity > 1) {
      updatedArray = [...state.items];
      updatedArray[
        updatedArray.findIndex((i) => i.id === action.id)
      ].quantity -= 1;
    } else {
      updatedArray = state.items.filter((i) => i.id !== action.id);
    }
    return {
      items: updatedArray,
      totalAmount: newTotalAmount.toFixed(2),
    };
  }
  return;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export const CartContext = React.createContext({
  availableMeals: [],
  totalAmount: 0,
  items: [],
  onAddItem: function (item) {},
  onRemoveItem: function (id) {},
});

const CartContextProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

  const onAddItem = (item) => {
    cartDispatch({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const onRemoveItem = (id) => {
    cartDispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const value = {
    availableMeals: DUMMY_MEALS,
    items: cartState.items,
    onAddItem: onAddItem,
    onRemoveItem: onRemoveItem,
    totalAmount: cartState.totalAmount,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
