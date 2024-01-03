import "./Hero.scss";

import HeroImg from "../../assets/img/hero-img.png";

function Hero() {
  return (
      <section className="hero">
        <div className="container hero-box">
          <div className="hero-left">
            <div className="title">
              Find Movies
              <span className="subtitle">TV shows and more</span>
            </div>
            <p className="hero-text">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button className="hero-btn">Watch Tutorial</button>
          </div>
          <div className="hero-right">
            <img src={HeroImg} alt="hero-img" width={650} height={700} />
          </div>
        </div>
      </section>
  );
}

export default Hero;
