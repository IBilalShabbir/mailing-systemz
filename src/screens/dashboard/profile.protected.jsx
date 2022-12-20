import ChangePasswordPopup from "../../components/ChangePasswordPopup";
import { useState, useEffect } from "react";

export default function Profile() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="container__main__content__listing">
        <div className="profile__dashboard__container">
          <div className="profile__dashboard__container__heading">Profile</div>
          <div className="profile__dashboard__container__middle">
            <div className="profile__dashboard__container__middle__entry">
              <div className="profile__dashboard__container__middle__entry__data">
                <div className="profile__dashboard__container__middle__entry__heading">
                  Email
                </div>
                <div className="profile__dashboard__container__middle__entry__input">
                  abcd@pqh.com
                </div>
              </div>
              <div className="profile__dashboard__container__middle__entry__div">
                <button
                  onClick={() => {
                    setPopup(!false);
                  }}
                  className="profile__dashboard__container__middle__entry__btn"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
          <div className="profile__dashboard__container__bottom">
            <div className="profile__dashboard__container__bottom__left">
              <div className="profile__dashboard__container__bottom__left__heading">
                Premium
              </div>
              <div className="profile__dashboard__container__bottom__subheading">
                <span>$999</span>/per month
              </div>
            </div>
            <div className="profile__dashboard__container__bottom__right">
              <div className="profile__dashboard__container__bottom__right__detail">
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.224068 7.406L3.5498 10.3742C4.48501 11.2086 6.00098 11.2086 6.93619 10.3742L17.2071 1.20744C17.5134 0.924399 17.5046 0.473367 17.1875 0.200009C16.8781 -0.0666696 16.3877 -0.0666696 16.0783 0.200009L5.80741 9.36677C5.49566 9.6449 4.99034 9.6449 4.67862 9.36677L1.35289 6.39857C1.03575 6.12521 0.530391 6.13306 0.224106 6.4161C-0.0746957 6.6922 -0.0746957 7.12991 0.224068 7.406Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="profile__dashboard__container__bottom__right__detail__text">
                  It is a long established fact that a reader will be{" "}
                </div>
              </div>
              <div className="profile__dashboard__container__bottom__right__detail">
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.224068 7.406L3.5498 10.3742C4.48501 11.2086 6.00098 11.2086 6.93619 10.3742L17.2071 1.20744C17.5134 0.924399 17.5046 0.473367 17.1875 0.200009C16.8781 -0.0666696 16.3877 -0.0666696 16.0783 0.200009L5.80741 9.36677C5.49566 9.6449 4.99034 9.6449 4.67862 9.36677L1.35289 6.39857C1.03575 6.12521 0.530391 6.13306 0.224106 6.4161C-0.0746957 6.6922 -0.0746957 7.12991 0.224068 7.406Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="profile__dashboard__container__bottom__right__detail__text">
                  It is a long established fact that a reader will be{" "}
                </div>
              </div>
              <div className="profile__dashboard__container__bottom__right__detail">
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.224068 7.406L3.5498 10.3742C4.48501 11.2086 6.00098 11.2086 6.93619 10.3742L17.2071 1.20744C17.5134 0.924399 17.5046 0.473367 17.1875 0.200009C16.8781 -0.0666696 16.3877 -0.0666696 16.0783 0.200009L5.80741 9.36677C5.49566 9.6449 4.99034 9.6449 4.67862 9.36677L1.35289 6.39857C1.03575 6.12521 0.530391 6.13306 0.224106 6.4161C-0.0746957 6.6922 -0.0746957 7.12991 0.224068 7.406Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="profile__dashboard__container__bottom__right__detail__text">
                  It is a long established fact that a reader will be{" "}
                </div>
              </div>
              <div className="profile__dashboard__container__bottom__right__detail">
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.224068 7.406L3.5498 10.3742C4.48501 11.2086 6.00098 11.2086 6.93619 10.3742L17.2071 1.20744C17.5134 0.924399 17.5046 0.473367 17.1875 0.200009C16.8781 -0.0666696 16.3877 -0.0666696 16.0783 0.200009L5.80741 9.36677C5.49566 9.6449 4.99034 9.6449 4.67862 9.36677L1.35289 6.39857C1.03575 6.12521 0.530391 6.13306 0.224106 6.4161C-0.0746957 6.6922 -0.0746957 7.12991 0.224068 7.406Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="profile__dashboard__container__bottom__right__detail__text">
                  It is a long established fact that a reader will be{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popup ? <ChangePasswordPopup setPopup={setPopup} /> : null}
    </>
  );
}
