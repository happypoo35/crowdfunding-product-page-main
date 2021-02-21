import React, { useContext, useEffect, useReducer, useState } from "react";
import { rewards } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  data: rewards,
  total: 89914,
  backers: 5007,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const openModal = (id) => {
    window.scrollTo(0, 150);
    setSelectedOption(`option${id}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOption("");
  };

  const openSuccess = () => {
    window.scrollTo(0, 150);
    closeModal();
    setIsSuccessOpen(true);
  };

  const closeSuccess = () => {
    setIsSuccessOpen(false);
  };

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: id });
  };

  const setTotal = (amount) => {
    dispatch({ type: "GET_TOTAL", payload: amount });
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isSuccessOpen,
        openSuccess,
        closeSuccess,
        selectedOption,
        setSelectedOption,
        ...state,
        setTotal,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
