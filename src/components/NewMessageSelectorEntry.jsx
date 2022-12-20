import { useId } from "react";

export function NewMessageSelectorEntry({
  isFirst,
  addToEmailList,
  setShowSelector,
}) {
  let alpha = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";

  const id = useId();
  return (
    <div className="new__message__popup__content__main__top__entry__selector__entry">
      <input
        id={id}
        type="radio"
        autoFocus={isFirst}
        onMouseDown={() => {
          addToEmailList(
            alpha.charAt(Math.floor(Math.random() * alpha.length)) + "@phq"
          );
          setShowSelector(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSelected(true);
            setShowSelector(false);
          }
        }}
        name="new__message__popup__content__main__top__entry__selector__entry"
        className="new__message__popup__content__main__top__entry__selector__entry__input"
      />
      <div className="new__message__popup__content__main__top__entry__selector__entry__wrapper">
        <div className="new__message__popup__content__main__top__entry__selector__entry__content">
          <div className="new__message__popup__content__main__top__entry__selector__entry__content__email">
            abcd@phq
          </div>
        </div>
      </div>
    </div>
  );
}
