import { useEffect, useRef, useState } from "react";
// import { rewards } from "./data";
import { useGlobalContext } from "./context";

const Rewards = () => {
  const [amount, setAmount] = useState("");
  const {
    selectedOption,
    setSelectedOption,
    openSuccess,
    isModalOpen,
    data,
    setTotal,
    decreaseAmount,
  } = useGlobalContext();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setAmount("");
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    setTotal(parseInt(amount));
    setAmount("");
    openSuccess();
  };

  useEffect(() => {
    !isModalOpen && setAmount("");
  }, [isModalOpen]);

  return (
    <div className="rewards-container">
      {data.map((reward) => {
        const { id, title, price, text, remaining } = reward;

        return (
          <article
            className={`reward ${
              selectedOption === `option${id}` && "active"
            } ${remaining === 0 && "disabled"}`}
            aria-label="reward-option"
            key={id}
          >
            <header className="reward-header">
              <div className="row">
                <label className="radio-container">
                  {title}
                  <input
                    type="radio"
                    name="radio"
                    value={`option${id}`}
                    checked={selectedOption === `option${id}`}
                    onChange={handleOptionChange}
                  />
                  <span className="checkmark"></span>
                </label>
                {price && (
                  <span className="price">{`Pledge $${price} or more`}</span>
                )}
                {remaining !== "" && (
                  <span className="remaining">
                    {remaining} <span className="left">left</span>
                  </span>
                )}
              </div>
              <p>{text}</p>
            </header>

            {selectedOption === `option${id}` && (
              <form className="amount" onSubmit={handleSubmit}>
                <label htmlFor="amount">Enter your pledge</label>
                <div className="amount-container">
                  <input
                    type="number"
                    name="amount"
                    autoComplete="off"
                    min={price || 1}
                    value={amount ? amount : price ? setAmount(price) : ""}
                    onChange={handleAmountChange}
                    required
                  />
                  <span className="currency">$</span>
                </div>
                <button
                  type="submit"
                  className="btn btn-small"
                  onClick={() => amount >= price && decreaseAmount(id)}
                >
                  Continue
                </button>
              </form>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default Rewards;
