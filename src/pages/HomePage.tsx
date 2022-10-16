
export default function HomePage() {
  return (
    <div className="Home-content">
      <div className="Home-img-container">
        <img src={process.env.PUBLIC_URL + '/img/banner.jpg'} alt="" className="Home-img" />
      </div>
      <div className="Home-text-container">
        <span className="Home-text-highlight">
          Hi there! <br /> My name is Anatol Kerbs and I’m a Frontend Developer.
        </span>
        <br />
        <br />
        I love all about web development, especially frontend.
        My stack: react, redux, typescript and related technologies. 
        <br />
        <br /> Feel free to contact with me!
      </div>
    </div>
  );
}
