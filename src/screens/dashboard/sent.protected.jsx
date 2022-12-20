import { useEffect } from "react";
import Mail from "../../components/Mail";

export default function Sent() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container__main__content__listing">
      <div className="inbox__list__header">
        <div className="inbox__list__header__heading">Sent</div>
      </div>
      <div className="inbox__list__mails">
        <Mail
          name="Bank Alfalah"
          transactionid="#113489358437587"
          time="12:32pm"
          text="Bank AlfalahAllied Bank proudly announces Bank of the Year 2022"
        />
        <Mail
          name="Bank Alfalah"
          transactionid="#113489358437587"
          time="12:32pm"
          text="Bank AlfalahAllied Bank proudly announces Bank of the Year 2022"
        />
        <Mail
          name="Bank Alfalah"
          transactionid="#113489358437587"
          time="12:32pm"
          text="Bank AlfalahAllied Bank proudly announces Bank of the Year 2022"
        />
        <Mail
          name="Bank Alfalah"
          transactionid="#113489358437587"
          time="12:32pm"
          text="Bank AlfalahAllied Bank proudly announces Bank of the Year 2022"
        />
        <Mail
          name="Bank Alfalah"
          transactionid="#113489358437587"
          time="12:32pm"
          text="Bank AlfalahAllied Bank proudly announces Bank of the Year 2022"
        />
        <Mail
          name="Bank Alfalah"
          transactionid="#113489358437587"
          time="12:32pm"
          text="Bank AlfalahAllied Bank proudly announces Bank of the Year 2022"
        />
        <Mail
          name="Bank Alfalah"
          transactionid="#113489358437587"
          time="12:32pm"
          text="Bank AlfalahAllied Bank proudly announces Bank of the Year 2022"
        />
      </div>

      {/* <div className="dashbo__btn">
    <button>helo</button>
  </div> */}
    </div>
  );
}
