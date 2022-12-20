export default function PaymentCardsEntry({ payment, pakages, submit }) {
  return (
    <div className="createownyourmail__cards__container__entry">
      <div className="createownyourmail__cards__container__entry__header">
        <div className="createownyourmail__cards__container__entry__header__top">
          <span>{payment}$</span>/per month
        </div>
        <button className="createownyourmail__cards__container__entry__header__btn">
          {pakages}
        </button>
      </div>
      <div className="createownyourmail__cards__container__entry__middle">
        <div className="createownyourmail__cards__container__entry__middle__text">
          <div className="createownyourmail__cards__container__entry__middle__text__svg">
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.188532 7.406L2.98681 10.3742C3.7737 11.2086 5.04924 11.2086 5.83613 10.3742L14.4781 1.20744C14.7358 0.924399 14.7284 0.473367 14.4616 0.200009C14.2013 -0.0666696 13.7886 -0.0666696 13.5283 0.200009L4.88636 9.36677C4.62406 9.6449 4.19888 9.6449 3.9366 9.36677L1.13832 6.39857C0.871485 6.12521 0.446272 6.13306 0.188563 6.4161C-0.0628491 6.6922 -0.0628491 7.12991 0.188532 7.406Z"
                fill="#E14982"
              />
            </svg>
          </div>
          It is a long established fact that a reader will be
        </div>
        <div className="createownyourmail__cards__container__entry__middle__text">
          <div className="createownyourmail__cards__container__entry__middle__text__svg">
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.188532 7.406L2.98681 10.3742C3.7737 11.2086 5.04924 11.2086 5.83613 10.3742L14.4781 1.20744C14.7358 0.924399 14.7284 0.473367 14.4616 0.200009C14.2013 -0.0666696 13.7886 -0.0666696 13.5283 0.200009L4.88636 9.36677C4.62406 9.6449 4.19888 9.6449 3.9366 9.36677L1.13832 6.39857C0.871485 6.12521 0.446272 6.13306 0.188563 6.4161C-0.0628491 6.6922 -0.0628491 7.12991 0.188532 7.406Z"
                fill="#E14982"
              />
            </svg>
          </div>
          It is a long established fact that a reader will be
        </div>
        <div className="createownyourmail__cards__container__entry__middle__text">
          <div className="createownyourmail__cards__container__entry__middle__text__svg">
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.792 6.432L9.216 12H7.568L4.896 7.648L2.352 12H0.736L4.144 6.432L0.72 0.848H2.352L5.04 5.216L7.6 0.848H9.232L5.792 6.432Z"
                fill="#E14982"
              />
            </svg>
          </div>
          It is a long established fact that a reader will be
        </div>
        <div className="createownyourmail__cards__container__entry__middle__text">
          <div className="createownyourmail__cards__container__entry__middle__text__svg">
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.792 6.432L9.216 12H7.568L4.896 7.648L2.352 12H0.736L4.144 6.432L0.72 0.848H2.352L5.04 5.216L7.6 0.848H9.232L5.792 6.432Z"
                fill="#E14982"
              />
            </svg>
          </div>
          It is a long established fact that a reader will be
        </div>
      </div>
      <div className="createownyourmail__cards__container__entry__btn">
        <button>{submit}</button>
      </div>
    </div>
  );
}
