import { useState } from "react";
import { rewards } from "./data";

const Rewards = () => {
  const [isChecked, setIsChecked] = useState(true);

  // const handleInputChange = (e) => {
  //   const target = e.target;
  //   target.checked;
  // };

  return (
    <div className="rewards-container">
      {rewards.map((reward) => {
        const { id, title, price, text, remaining } = reward;

        return (
          <article className="reward" aria-label="reward-option" key={id}>
            <header className="reward-header">
              <div className="row">
                <label className="radio-container">
                  {title}
                  <input
                    type="radio"
                    name="radio"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <span className="checkmark"></span>
                </label>
                {price && (
                  <span className="price">{`Pledge $${price} or more`}</span>
                )}
                {remaining && (
                  <span className="remaining">
                    {remaining} <span className="left">left</span>
                  </span>
                )}
              </div>
              <p>{text}</p>
            </header>
            <form action="" className="amount">
              <label htmlFor="amount">Enter your pledge</label>
              <div className="amount-container">
                <input
                  type="number"
                  name="amount"
                  autoComplete="off"
                  // value={price}
                />
                <span className="currency">$</span>
              </div>
              <button className="btn btn-small">Continue</button>
            </form>
          </article>
        );
      })}
    </div>
  );
};

export default Rewards;
