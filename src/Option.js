const Option = ({ title, text, price, remaining }) => {
  return (
    <article className="option" aria-label="pledge option">
      <header className="option-header">
        <h5>{title}</h5>
        <span className="price">{`Pledge $${price} or more`}</span>
      </header>
      <p>{text}</p>
      <footer className="option-footer">
        <span className="remaining">
          {remaining} <span className="left">left</span>
        </span>
        <button className="btn btn-medium">Select Reward</button>
      </footer>
    </article>
  );
};

export default Option;
