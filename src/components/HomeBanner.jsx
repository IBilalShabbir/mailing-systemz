import { Link } from "react-router-dom";
import { homebannerright } from "../assets";

export default function HomepageBanner() {
  return (
    <div className="homepage">
      <div className="homepage___wrapper">
        <div className="homepage___wrapper__overlay">
          <div className="homepage___wrapper__left">
            <div className="homepage___wrapper__left__heading">
              Create Your Own Mail!
            </div>
            <div className="homepage___wrapper__left__text">
              We have a large scale group to support each other in this game,
              Join us to get the news as soon as possiblie and follow our latest
              announcements. Join us to get the news as soon as possible and
              follow our latest announcements!
            </div>
            <Link
              to="/signin"
              className="homepage___wrapper__left__get__started"
            >
              Get Started
            </Link>
          </div>
          <div className="homepage___wrapper__right">
            <img src={homebannerright} alt="homebannerright" />
          </div>
        </div>
      </div>
    </div>
  );
}
