import Mail from "../../components/Mail";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container__main__content__listing">
      <div className="inbox__list__header">
        <div className="inbox__list__header__heading">Inbox</div>
        <div className="inbox__list__header__remainigs">
          You have only &nbsp;
          <span style={{ fontWeight: "600" }}> 2 </span>
          &nbsp; mail left
        </div>
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
