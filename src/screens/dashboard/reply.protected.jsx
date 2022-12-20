import React from "react";
import { X } from "react-feather";
import { NewMessageEmail } from "../../components/NewMessageEmail";

export default function reply() {
  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__new__email">
        <div className="container__main__content__listing__new__email__heading">
          Reply
        </div>
        <div className="container__main__content__listing__new__email__data">
          <div className="container__main__content__listing__new__email__data__entries">
            <div className="container__main__content__listing__new__email__data__entry">
              <div className="container__main__content__listing__new__email__data__entry__heading">
                To:
              </div>
              <NewMessageEmail />
            </div>
            <div className="container__main__content__listing__new__email__data__entry">
              <div className="container__main__content__listing__new__email__data__entry__heading">
                Subject:
              </div>
              <input type="text" />
            </div>
          </div>
          <div className="container__main__content__listing__new__email__data__entries__text">
            <textarea name="text" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="container__main__content__listing__new__email__bottom__entries">
          <div className="container__main__content__listing__new__email__bottom__entries__data">
            <div className="container__main__content__listing__new__email__bottom__entries__input__field">
              <div className="container__main__content__listing__new__email__bottom__entries__input__field__attachment">
                Attachment
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4671 7.17984C17.1738 6.8866 16.6983 6.8866 16.405 7.17984L8.22322 15.3969C6.75646 16.8639 4.37826 16.864 2.91129 15.3973C1.44432 13.9306 1.44418 11.5524 2.9109 10.0854L10.835 2.12897C11.7221 1.25601 13.1489 1.26745 14.0219 2.15453C14.8848 3.03143 14.885 4.43833 14.0223 5.31544L6.09815 13.2719C5.80122 13.5563 5.33291 13.5563 5.03601 13.2719C4.74277 12.9785 4.74277 12.503 5.03601 12.2097L12.091 5.12241C12.3792 4.824 12.371 4.34847 12.0726 4.06026C11.7815 3.7791 11.32 3.7791 11.0289 4.06026L3.97386 11.1476C3.09372 12.0275 3.09361 13.4544 3.97358 14.3345C3.97368 14.3346 3.97375 14.3347 3.97386 14.3348C4.86579 15.1859 6.26914 15.1859 7.16107 14.3348L15.0844 6.37765C16.5324 4.89234 16.5021 2.51446 15.0168 1.0665C13.558 -0.355642 11.2315 -0.355466 9.7729 1.06682L1.84876 9.02321C-0.204794 11.0768 -0.204794 14.4063 1.84876 16.4598C3.90231 18.5134 7.23181 18.5134 9.28536 16.4598L17.4671 8.24501C17.7613 7.95244 17.7626 7.47684 17.47 7.18269C17.469 7.18174 17.4681 7.18079 17.4671 7.17984Z"
                    fill="#171321"
                  />
                </svg>
              </div>
              <input
                type="file"
                className="container__main__content__listing__new__email__bottom__entries__input__field__attachment__input"
              />
            </div>
            <div className="container__main__content__listing__new__email__field__attachment__input__uploads">
              <div className="container__main__content__listing__new__email__field__attachment__input__upload__entry">
                Attachment name here
                <button>
                  <X />
                </button>
              </div>
              <div className="container__main__content__listing__new__email__field__attachment__input__upload__entry">
                Attachment name here
                <button>
                  <X />
                </button>
              </div>
              <div className="container__main__content__listing__new__email__field__attachment__input__upload__entry">
                Attachment name here
                <button>
                  <X />
                </button>
              </div>
            </div>
          </div>
          <div className="container__main__content__listing__new__email__bottom__entries__right">
            <button>Discord</button>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
