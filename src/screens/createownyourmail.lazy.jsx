import PaymentCardsEntry from "../components/PaymentCardsEntry";
import { useEffect } from "react";

export default function createownyourmail() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="createownyourmail">
        <div className="createownyourmail__container">
          <div className="createownyourmail__container__heading">
            Create Your Own Mail
          </div>
          <div className="createownyourmail__container__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem IpsumLorem Ipsum is simply dummy text of the
            printing
          </div>
        </div>
      </div>
      <div className="createownyourmail__cards">
        <div className="createownyourmail__cards__container">
          <PaymentCardsEntry payment="0" pakages="Free" submit="Choose" />
          <PaymentCardsEntry payment="0" pakages="Basic" submit="Choose" />
          <PaymentCardsEntry payment="0" pakages="Standard" submit="Choose" />
          <PaymentCardsEntry payment="0" pakages="Premium" submit="Choose" />
        </div>
      </div>
    </>
  );
}
