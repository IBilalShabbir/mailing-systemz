import { useState } from "react";
import Mail from "../../components/Mail";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Details() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="container__main__content__listing">
        <div className="inbox__list__header">
          <div className="inbox__list__header__heading">Inbox</div>
        </div>
        <div
          onClick={() => {
            setShow(!false);
          }}
          className="inbox__list__mails"
        >
          <Mail
            name="Bank Alfalah"
            transactionid="#113489358437587"
            time="12:32pm"
            active={true}
            text="Bank AlfalahAllied Bank proudly announces Bank of the Year 2022"
          />
        </div>
        {show ? (
          <div className="container__main__content__listing__message">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            voluptate quod aperiam sequi voluptas similique velit iste neque
            reiciendis eaque laboriosam odio earum sed magni alias recusandae
            vero perferendis? Adipisci, commodi illo? Deserunt deleniti
            perferendis suscipit magni minima fuga dolorem laboriosam
            architecto, quibusdam necessitatibus vel adipisci ut aut assumenda
            corrupti provident fugit repellendus quia. Sed, odio. Perferendis
            possimus dignissimos ea earum, voluptas inventore debitis sunt
            dolores unde, odit esse. Laboriosam.
          </div>
        ) : null}
        <div className="inbox__list__bottom__entry">
          <Link to="/dashboard/reply" className="inbox__list__button">
            Reply
          </Link>
        </div>
      </div>
    </>
  );
}
