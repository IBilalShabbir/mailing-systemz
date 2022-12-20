import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../global";

export default function EnterPopup({ setPopup }) {
  const [, setUser] = useAtom(userAtom);
  const navigate = useNavigate();
  return (
    <div className="enter__pop__up">
      <div className="enter__pop__up__overlay">
        <div className="enter__pop__up__overlay__card">
          <div className="enter__pop__up__overlay__card__heading">
            Please enter your blockchain id and secret words to enter to mailing
            system
          </div>
          <div className="enter__pop__up__overlay__card__data">
            <input
              type="text"
              placeholder="Enter blockchain id"
              className="enter__pop__up__overlay__card__data__input"
            />
            <textarea
              placeholder="Enter secret words"
              className="enter__pop__up__overlay__card__data__text__area"
            />
          </div>
          <div className="enter__pop__up__overlay__card__data__btns">
            <button
              onClick={() => {
                setPopup(false);
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM12 5.25L1 5.25V6.75L12 6.75V5.25Z"
                  fill="currentColor"
                />
              </svg>
              Back
            </button>
            <button
              onClick={() => {
                setUser({
                  name: "Muhammad Ali",
                  email: "ali@phq",
                });
                navigate("/dashboard");
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
