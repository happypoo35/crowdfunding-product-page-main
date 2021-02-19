import { useEffect, useRef, useState } from "react";
import { rewards } from "./data";
import { useGlobalContext } from "./context";

const Rewards = () => {
  const [amount, setAmount] = useState("");
  const { selectedOption, setSelectedOption } = useGlobalContext();
  const amountContainer = useRef(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="rewards-container">
      {rewards.map((reward) => {
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
              <form action="" className="amount">
                <label htmlFor="amount">Enter your pledge</label>
                <div className="amount-container">
                  <input
                    type="number"
                    name="amount"
                    autoComplete="off"
                    min={price}
                    value={amount ? amount : price}
                    onChange={handleAmountChange}
                    ref={amountContainer}
                  />
                  <span className="currency">$</span>
                </div>
                <button className="btn btn-small">Continue</button>
              </form>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default Rewards;
