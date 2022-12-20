import { Link } from "react-router-dom";
import { tradingbanner } from "../assets";

export default function MostAdvancedCrypto() {
  return (
    <div className="most__advanced__crypto">
      <img
        src={tradingbanner}
        className="most__advanced__crypto__img"
        alt="tradingbanner"
      />
      <div className="most__advanced__crypto__overlay">
        <div className="most__advanced__crypto__overlay__heading">
          Most advanced crypto trading platfrom ever!
        </div>

        <Link to="/signin" className="most__advanced__crypto__overlay__btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}
