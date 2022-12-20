import { Link, useNavigate } from "react-router-dom";
import ClickAwayHandler from "react-click-away-listener";
import { logo } from "../assets";
import { useEffect } from "react";
import { useState } from "react";

export default function secretrecovery() {
  const [privateKey, setPrivateKey] = useState(false);
  const [secretPhrase, setSecretPhrase] = useState(false);
  function closeAll() {
    setPrivateKey(false);
    setSecretPhrase(false);
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="sign__in">
      <div className="sign__in__overlay">
        <div className="sign__in__overlay__header">
          <div className="sign__in__overlay__header__entry">
            <img
              onClick={() => {
                navigate("/");
              }}
              src={logo}
              alt="logo"
            />
          </div>
        </div>
        <div className="secretrecovery__overlay__card">
          <div className="secretrecovery__overlay__card__heading">
            Secret Recovery Phrase
          </div>
          <div className="secretrecovery__overlay__card__detail">
            <div className="secretrecovery__overlay__card__detail__subheading">
              Your Secret Recovery Phrase makes it easy to back up and restore
              your account.
            </div>
            <div className="secretrecovery__overlay__card__detail__warning">
              WARNING:
            </div>
            <div className="secretrecovery__overlay__card__detail__subheading">
              Never disclose your Secret Recovery Phrase. Anyone with this
              phrase can take your Ether forever.
            </div>
          </div>
          <SecretEntry
            show={privateKey}
            onClick={() => {
              setPrivateKey(true);
              setSecretPhrase(false);
            }}
            closeAll={closeAll}
            heading="Private key"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </SecretEntry>
          <SecretEntry
            show={secretPhrase}
            onClick={() => {
              setPrivateKey(false);
              setSecretPhrase(true);
            }}
            closeAll={closeAll}
            heading="Pass Pharase"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            quos cumque excepturi nemo quidem vitae corrupti libero. Error, sit
            quidem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </SecretEntry>
          <div className="secretrecovery__overlay__card__bottom__btns">
            <Link
              onClick={() => {
                navigate(-1);
              }}
              className="secretrecovery__overlay__card__bottom__btns__back"
            >
              Back
            </Link>
            <Link
              to="/mailhome"
              className="secretrecovery__overlay__card__bottom__btns__back"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  function SecretEntry({ children, show, onClick, closeAll, heading }) {
    const [isCopy, setIsCopy] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsCopy(false);
      }, 5000);
    }, [isCopy]);
    useEffect(() => {
      setTimeout(() => {
        closeAll();
      }, 10000);
    }, [show]);

    return (
      <ClickAwayHandler
        onClickAway={() => {
          setShow(false);
        }}
      >
        <div className="secret__entry">
          <div className="secret__entry__label">{heading}</div>
          <div className="secret__entry__label__data">
            <div className="secret__entry__content">
              {!show && (
                <div
                  className="secret__entry__content__overlay"
                  onClick={onClick}
                >
                  <svg
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8409 7.77892V6.46396C15.8409 4.74961 15.1537 3.10548 13.9304 1.89325C12.7072 0.681023 11.0481 0 9.31818 0C7.58825 0 5.92917 0.681023 4.70592 1.89325C3.48267 3.10548 2.79545 4.74961 2.79545 6.46396V7.77892C1.96554 8.13786 1.25916 8.72868 0.762692 9.47914C0.266225 10.2296 0.00119121 11.1072 0 12.0045V17.545C0.00147959 18.7691 0.492822 19.9427 1.36625 20.8082C2.23968 21.6738 3.42388 22.1607 4.65909 22.1622H13.9773C15.2125 22.1607 16.3967 21.6738 17.2701 20.8082C18.1435 19.9427 18.6349 18.7691 18.6364 17.545V12.0045C18.6352 11.1072 18.3701 10.2296 17.8737 9.47914C17.3772 8.72868 16.6708 8.13786 15.8409 7.77892ZM4.65909 6.46396C4.65909 5.23943 5.14996 4.06505 6.02371 3.19917C6.89746 2.33329 8.08251 1.84685 9.31818 1.84685C10.5538 1.84685 11.7389 2.33329 12.6127 3.19917C13.4864 4.06505 13.9773 5.23943 13.9773 6.46396V7.38739H4.65909V6.46396ZM16.7727 17.545C16.7727 18.2798 16.4782 18.9844 15.954 19.5039C15.4297 20.0234 14.7187 20.3153 13.9773 20.3153H4.65909C3.91769 20.3153 3.20666 20.0234 2.68241 19.5039C2.15816 18.9844 1.86364 18.2798 1.86364 17.545V12.0045C1.86364 11.2698 2.15816 10.5652 2.68241 10.0456C3.20666 9.5261 3.91769 9.23423 4.65909 9.23423H13.9773C14.7187 9.23423 15.4297 9.5261 15.954 10.0456C16.4782 10.5652 16.7727 11.2698 16.7727 12.0045V17.545Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.44395 12.8438C9.21017 12.8438 8.98597 12.9433 8.82067 13.1204C8.65537 13.2975 8.5625 13.5377 8.5625 13.7882V15.677C8.5625 15.9275 8.65537 16.1677 8.82067 16.3448C8.98597 16.5219 9.21017 16.6214 9.44395 16.6214C9.67772 16.6214 9.90192 16.5219 10.0672 16.3448C10.2325 16.1677 10.3254 15.9275 10.3254 15.677V13.7882C10.3254 13.5377 10.2325 13.2975 10.0672 13.1204C9.90192 12.9433 9.67772 12.8438 9.44395 12.8438Z"
                      fill="currentColor"
                    />
                  </svg>
                  Click here to reveal the secret
                </div>
              )}
              <div className="secret__entry__content__data">{children}</div>
            </div>
            <button
              className="secret__entry__button"
              type="button"
              style={isCopy ? { color: "lightgreen" } : null}
              onClick={() => {
                setIsCopy(true);
              }}
            >
              {isCopy ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-check"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 20C12.3256 19.9984 13.5964 19.4711 14.5338 18.5338C15.4711 17.5964 15.9984 16.3256 16 15V6.24301C16.0016 5.71737 15.8988 5.19665 15.6976 4.71103C15.4964 4.22541 15.2008 3.78456 14.828 3.41402L12.586 1.17202C12.2155 0.799191 11.7746 0.50362 11.289 0.302437C10.8034 0.101255 10.2826 -0.00153795 9.757 1.73896e-05H5C3.67441 0.00160525 2.40356 0.528899 1.46622 1.46624C0.528882 2.40357 0.00158786 3.67442 0 5.00001V15C0.00158786 16.3256 0.528882 17.5964 1.46622 18.5338C2.40356 19.4711 3.67441 19.9984 5 20H11ZM2 15V5.00001C2 4.20436 2.31607 3.4413 2.87868 2.8787C3.44129 2.31609 4.20435 2.00002 5 2.00002C5 2.00002 9.919 2.01402 10 2.02402V4.00001C10 4.53045 10.2107 5.03915 10.5858 5.41423C10.9609 5.7893 11.4696 6.00001 12 6.00001H13.976C13.986 6.08101 14 15 14 15C14 15.7957 13.6839 16.5587 13.1213 17.1213C12.5587 17.6839 11.7956 18 11 18H5C4.20435 18 3.44129 17.6839 2.87868 17.1213C2.31607 16.5587 2 15.7957 2 15ZM20 8.00001V19C19.9984 20.3256 19.4711 21.5964 18.5338 22.5338C17.5964 23.4711 16.3256 23.9984 15 24H6C5.73478 24 5.48043 23.8946 5.29289 23.7071C5.10536 23.5196 5 23.2652 5 23C5 22.7348 5.10536 22.4804 5.29289 22.2929C5.48043 22.1054 5.73478 22 6 22H15C15.7956 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7957 18 19V8.00001C18 7.7348 18.1054 7.48044 18.2929 7.29291C18.4804 7.10537 18.7348 7.00001 19 7.00001C19.2652 7.00001 19.5196 7.10537 19.7071 7.29291C19.8946 7.48044 20 7.7348 20 8.00001Z"
                    fill="currentColor"
                    fill-opacity="0.65"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </ClickAwayHandler>
    );
  }
}
