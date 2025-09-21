import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import Logo from "./assets/LOGO.svg";
import Basket from "./assets/basket.svg";
import BannerImage from "./assets/banner.png";
import BurgerIcon from "./assets/burger.svg";
import Card1 from "./assets/cards/card1.png";
import Card2 from "./assets/cards/card2.png";
import Card3 from "./assets/cards/card3.png";
import Card4 from "./assets/cards/card4.png";
import Rocket from "./assets/earth/rocket.svg";
import Earth from "./components/Earth";


function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const offersRef = useRef(null);

  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsBurgerOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderNav = () => (
    <nav className="header__nav">
      <a href="#" onClick={scrollToTop} className="header__link">
        Home
      </a>
      <a href="#" onClick={scrollToOffers} className="header__link">
        Products
      </a>
      <button className="header__cart">
        <img src={Basket} alt="Basket" />
      </button>
    </nav>
  );

  const renderBurger = () => (
    <div className="header__burger">
      <button
        className="burger__button"
        onClick={e => {
          e.preventDefault();
          setIsBurgerOpen(!isBurgerOpen);
        }}
        aria-label="Open menu"
      >
        <img src={BurgerIcon} alt="Menu" />
      </button>
      {isBurgerOpen && (
        <div className="burger__dropdown">
          <a href="#" onClick={() => { setIsBurgerOpen(false); scrollToTop(); }}>Home</a>
          <a href="#" onClick={() => { setIsBurgerOpen(false); scrollToOffers(); }}>Products</a>
        </div>
      )}
    </div>
  );

  return (
    <div className="App">
      <header className="header">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
        {windowWidth > 360 ? renderNav() : renderBurger()}
      </header>

      <section
        className={`banner ${windowWidth <= 360 ? "mobile" : "desktop"}`}
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="banner__content">
          <h1 className="banner__title">
            Discover the vast expanses of <span>space</span>
          </h1>
          <p className="banner__text">
            Where the possibilities are <span>endless!</span>
          </p>
          <button className="banner__button">Learn more</button>
        </div>
        <Earth />
      </section>

      <section className="offers" ref={offersRef}>
        <h2 className="offers__header">Offers</h2>
        <div className="offers__cards">
          {[{
            img: Card1,
            title: <>Move the borders<br />of reality!</>,
            text: "Go on a space adventure - it's possible with us!"
          }, {
            img: Card2,
            title: "Space is not just stars and planets",
            text: "Go on a space adventure"
          }, {
            img: Card3,
            title: "For those who dream of stars",
            text: "Our offer: make your dream come true"
          }, {
            img: Card4,
            title: "Fulfill your fantastic dreams",
            text: "Space has never been so close"
          }].map((card, idx) => (
            <div
              key={idx}
              className={`card card--${idx + 1}`}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className="card__content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button>Learn more</button>
              </div>
            </div>
          ))}
        </div>

        <section className="info-block">
          <h3 className="info-header">Embark on a space journey</h3>
          <input type="checkbox" id="toggle" className="toggle-checkbox" />
          <p className="info-text">
            Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever.
            <span className="more-text">
              And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
            </span>
          </p>
          <label htmlFor="toggle" className="info-button"></label>
        </section>
      </section>

      <footer className="footer">
        <img src={Rocket} alt="Rocket" />
        <p className="footer__text">Exciting space adventure!</p>
      </footer>
    </div>
  );
}

export default App;