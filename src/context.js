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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const openModal = (id) => {
    windowSize > 480
      ? window.scroll({ top: 150, behavior: "smooth" })
      : window.scroll({ top: 100, behavior: "smooth" });
    setSelectedOption(`option${id}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOption("");
  };

  const openSuccess = () => {
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

  const checkSize = () => {
    setWindowSize(window.innerWidth);
  };

  const checkTarget = (e) => {
    if (e.target.classList[0] === "modal") {
      closeModal();
      closeSuccess();
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  useEffect(() => {
    if (windowSize > 480) setIsMenuOpen(false);
  }, [windowSize]);

  useEffect(() => {
    window.addEventListener("click", checkTarget);
    return () => {
      window.removeEventListener("click", checkTarget);
    };
  });

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isSuccessOpen,
        openSuccess,
        closeSuccess,
        isMenuOpen,
        setIsMenuOpen,
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
