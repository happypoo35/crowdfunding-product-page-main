import Options from "./Options";

const About = () => {
  return (
    <section className="about pad" aria-label="about project">
      <div className="container">
        <h4>About this project</h4>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
          <br />
          <br />
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <Options />
      </div>
    </section>
  );
};

export default About;
