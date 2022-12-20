import ClickAwayListener from "react-click-away-listener";
import { NewMessageSelectorEntry } from "./NewMessageSelectorEntry";
import { useState } from "react";

export function NewMessageEmail({ title, value, placeholder }) {
  const [showSelector, setShowSelector] = useState(false);
  const [emailList, setEmailList] = useState([]);

  function addToEmailList(value) {
    setEmailList([...emailList, value]);
  }

  function removeEmail(email) {
    setEmailList(emailList.filter((e) => e !== email));
  }

  return (
    <div className="new__message__popup__content__main__top__entry">
      {title}
      {emailList.length > 0
        ? emailList.map((email, index) => (
            <div
              className="new__message__popup__content__main__top__entry__selection"
              key={index}
            >
              <div className="new__message__popup__content__main__top__entry__selection__name">
                {email.split("@")[0]}
              </div>
              <button
                className="new__message__popup__content__main__top__entry__selection__button"
                onClick={() => {
                  removeEmail(email);
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6668 3.33333L3.3335 12.6666M3.33353 3.33333L12.6668 12.6666"
                    stroke="#ffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))
        : null}
      <input
        type="text"
        className="new__message__popup__content__main__top__entry__input"
        defaultValue={value}
        placeholder={placeholder}
        onChange={(e) => {
          if (e.target.value.length > 0) {
            setShowSelector(true);
          } else {
            setShowSelector(false);
          }
        }}
      />
      {showSelector && (
        <ClickAwayListener
          onOutsideClick={() => {
            setShowSelector(false);
          }}
        >
          <div className="new__message__popup__content__main__top__entry__selector">
            <NewMessageSelectorEntry
              addToEmailList={addToEmailList}
              setShowSelector={setShowSelector}
              isFirst={true}
            />
            <NewMessageSelectorEntry
              addToEmailList={addToEmailList}
              setShowSelector={setShowSelector}
            />
            <NewMessageSelectorEntry
              addToEmailList={addToEmailList}
              setShowSelector={setShowSelector}
            />
            <NewMessageSelectorEntry
              addToEmailList={addToEmailList}
              setShowSelector={setShowSelector}
            />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}
