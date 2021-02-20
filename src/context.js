import React, { useContext, useReducer, useState } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  total: "89,914",
  backers: "5,007",
  remaining: [],
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
