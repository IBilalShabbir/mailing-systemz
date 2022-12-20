import EnterPopup from "../components/EnterPopup";
import { Link } from "react-router-dom";
import { mail } from "../assets";
import { mailinglogo } from "../assets";
import { useEffect, useState } from "react";

export default function mailhome() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="mailhome">
        <div className="mailhome__container">
          <div className="mailhome__container__box">
            <div className="mailhome__container__box__header">
              <Link to="/" className="mailhome__container__box__header__logo">
                <img src={mailinglogo} alt=""></img>
              </Link>
              <div className="mailhome__container__box__header__buttons">
                <div className="mailhome__container__box__header__buttons__pricing">
                  <Link to="/createownyourmail" className="pricing__button">
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
            <div className="mailhome__container__box__description">
              <div className="mailhome__container__box__description__img">
                <img src={mail} alt="mail" />
              </div>
              <div className="mailhome__container__box__description__heading">
                Create Your Own mail
              </div>
              <div className="mailhome__container__box__description__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                nostrum pariatur possimus, animi quo reprehenderit atque amet
                dolores consequatur distinctio minima? Reprehenderit eveniet
                consequuntur porro molestias eos architecto ratione. Voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                tenetur?
              </div>
              <div className="mailhome__container__box__description__buttons">
                <button
                  onClick={() => {
                    setPopup(!false);
                  }}
                  className="mailhome__container__box__description__buttons__entermail"
                >
                  Enter into mail
                </button>
                <Link
                  to="/"
                  className="mailhome__container__box__description__buttons__logout"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popup ? <EnterPopup setPopup={setPopup} /> : null}
    </>
  );
}
