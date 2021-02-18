const Metric = () => {
  return (
    <section className="metric pad" aria-label="project metric">
      <div className="container">
        <div className="metric-stats">
          <div className="stat">
            <h2>$89,914</h2>
            <p>of $100,000 backed</p>
          </div>
          <div className="stat">
            <h2>5,007</h2>
            <p>total backers</p>
          </div>
          <div className="stat">
            <h2>56</h2>
            <p>days left</p>
          </div>
        </div>
        <div className="progress-bar"></div>
      </div>
    </section>
  );
};

export default Metric;
