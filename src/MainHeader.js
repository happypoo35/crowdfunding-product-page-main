const MainHeader = () => {
  return (
    <section className="main-header pad" aria-label="project title">
      <div className="container">
        <img src="./images/logo-mastercraft.svg" alt="Mastercraft logo" />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <footer>
          <button className="btn">Back this project</button>
          <button>
            <img src="/images/icon-bookmark.svg" alt="icon" /> Bookmark
          </button>
        </footer>
      </div>
    </section>
  );
};

export default MainHeader;
