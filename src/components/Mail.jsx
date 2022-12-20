import { Link } from "react-router-dom";

export default function ({ name, transactionid, time, text, active }) {
  return (
    <Link
      to="/dashboard/details"
      className={
        active ? "inbox__list__mails__mail__active" : "inbox__list__mails__mail"
      }
    >
      <div className="inbox__list__mails__mail__info">
        <div className="inbox__list__mails__mail__info__heading">
          <div className="inbox__list__mails__mail__info__heading__name">
            {name}
          </div>
          <div className="inbox__list__mails__mail__info__heading__transctionid">
            {transactionid}
          </div>
        </div>
        <div className="inbox__list__mails__mail__info__time"> {time}</div>
      </div>
      <div className="inbox__list__mails__mail__text">{text}</div>
    </Link>
  );
}
