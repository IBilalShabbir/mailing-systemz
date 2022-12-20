import { Facebook, Instagram, Linkedin } from "react-feather";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__col">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__logo"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="133.000000pt"
              height="176.000000pt"
              viewBox="0 0 133.000000 176.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,176.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M7 1458 c-4 -166 -7 -446 -7 -622 l0 -321 110 110 110 110 0 402 0
403 376 0 376 0 37 32 c20 17 74 67 120 110 l84 78 -600 0 -600 0 -6 -302z"
                />
                <path
                  d="M1218 1532 l-108 -111 0 -400 0 -401 -377 0 -378 0 -117 -110 -118
-110 599 0 599 0 7 223 c3 122 5 401 3 620 l-3 399 -107 -110z"
                />
                <path d="M450 1085 l0 -215 220 0 220 0 0 215 0 215 -220 0 -220 0 0 -215z" />
                <path
                  d="M873 233 c-86 -16 -103 -150 -22 -184 18 -7 29 -19 29 -30 0 -12 7
-19 20 -19 13 0 20 7 20 18 0 10 12 22 30 29 40 15 66 70 54 114 -14 50 -73
82 -131 72z m71 -59 c20 -20 20 -58 0 -78 -33 -34 -104 -8 -104 37 0 49 70 76
104 41z"
                />
                <path
                  d="M887 154 c-14 -15 -6 -34 14 -34 14 0 19 5 17 17 -3 18 -20 27 -31
17z"
                />
                <path
                  d="M300 135 c0 -88 1 -95 20 -95 19 0 20 7 20 95 0 88 -1 95 -20 95 -19
0 -20 -7 -20 -95z"
                />
                <path
                  d="M370 210 c0 -18 7 -20 54 -20 30 0 58 -5 61 -10 13 -22 -17 -40 -66
-40 -37 0 -49 -4 -49 -15 0 -24 121 -21 143 3 23 25 21 58 -3 82 -16 16 -33
20 -80 20 -53 0 -60 -2 -60 -20z"
                />
                <path
                  d="M562 138 c3 -88 4 -93 26 -96 20 -3 22 1 22 37 0 40 1 41 35 41 24 0
35 5 35 15 0 10 -11 15 -35 15 -34 0 -35 1 -35 40 0 36 -2 40 -25 40 l-26 0 3
-92z"
                />
                <path
                  d="M710 135 c0 -95 0 -95 25 -95 25 0 25 0 25 95 0 95 0 95 -25 95 -25
0 -25 0 -25 -95z"
                />
              </g>
            </svg>
          </Link>
          <div className="footer__content__col__info">
            We work with a passion of taking chanllenges and creating new ones
            in advertising sector.
          </div>
          <div className="footer__content__col__socials">
            <a href="#" className="footer__content__col__socials__link">
              <Facebook size={20} color="currentColor" />
            </a>
            <a href="#" className="footer__content__col__socials__link">
              <Instagram size={20} color="currentColor" />
            </a>
            <a href="#" className="footer__content__col__socials__link">
              <Linkedin size={20} color="currentColor" />
            </a>
          </div>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Services</div>
          <Link className="footer__content__col__link">cyber security</Link>
          <Link className="footer__content__col__link">It management</Link>
          <Link className="footer__content__col__link">QA & Testing</Link>
          <Link className="footer__content__col__link">Investment Plan</Link>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Subscribe</div>
          <div className="footer__content__col__link">
            Sign up to receive the latest articles
          </div>
          <div className="footer__content__col__link__email__input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="footer__content__col__link__email__btn">
            <button>Register</button>
          </div>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Contact</div>
          <div className="footer__content__col__row">
            <a
              href="#"
              title="923070061462"
              className="footer__content__col__row__link"
            >
              +91 300 1234567
            </a>
          </div>
          <div className="footer__content__col__row">
            <a
              href="#"
              title="info@dsme.com"
              className="footer__content__col__row__link"
            >
              India@phq.com
            </a>
          </div>
          <div className="footer__content__col__row">Mumbai India</div>
        </div>
      </div>
      <div className="footer__bottom__copy__right">
        © All copyright by Cretech
      </div>
    </div>
  );
}
