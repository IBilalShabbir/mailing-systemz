import { Link } from "react-router-dom";
import { blockchain } from "../assets";

export default function HomePageTrading() {
  return (
    <section className="homepage__trading">
      <div className="homepage__trading__container">
        <div className="homepage__trading__container__left">
          <div className="homepage__trading__container__left__heading">
            Most advanced crypto trading platfrom
          </div>
          <div className="homepage__trading__container__left__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </div>
          <div className="homepage__trading__container__left__btn">
            <Link
              to="/signin"
              className="homepage__trading__container__left__btn__get__started"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="homepage__trading__container__right">
          <div className="homepage__trading__container__right__entry">
            <div className="homepage__trading__container__right__entry__icon">
              <img src={blockchain} alt="blockchain" />
            </div>
            <div className="homepage__trading__container__right__entry__heading">
              Automizer
            </div>
            <div className="homepage__trading__container__right__entry__text">
              Integrate all your traffic sources with Voluum and set up custom
              rules ro auto-optimize your campaigns
            </div>
          </div>
          <div className="homepage__trading__container__right__card__col">
            <div className="homepage__trading__container__right__entry">
              <div className="homepage__trading__container__right__entry__icon">
                <img src={blockchain} alt="blockchain" />
              </div>
              <div className="homepage__trading__container__right__entry__heading">
                Automizer
              </div>
              <div className="homepage__trading__container__right__entry__text">
                Integrate all your traffic sources with Voluum and set up custom
                rules ro auto-optimize your campaigns
              </div>
            </div>

            <div className="homepage__trading__container__right__entry">
              <div className="homepage__trading__container__right__entry__icon">
                <img src={blockchain} alt="blockchain" />
              </div>
              <div className="homepage__trading__container__right__entry__heading">
                Automizer
              </div>
              <div className="homepage__trading__container__right__entry__text">
                Integrate all your traffic sources with Voluum and set up custom
                rules ro auto-optimize your campaigns
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
