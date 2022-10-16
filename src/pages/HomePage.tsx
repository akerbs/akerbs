
export function HomePage() {
  return (
    <div className="Home-content">
      <div className="Home-img-container">
        <img src={process.env.PUBLIC_URL + '/img/banner.jpg'} alt="" className="Home-img" />
      </div>
      <div className="Home-text-container">
        <span className="Home-text-highlight">
          Hi there! <br /> My name is Anatol Kerbs and I’m a Web Developer and
          Designer.
        </span>
        <br />
        <br />
        I live in Hamburg, Germany and I love all things about web development &
        design.
        <br />
        <br /> Feel free to contact with me!
      </div>
    </div>
  );
}
