import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu } from "react-feather";

export default function HeaderDashboard({ setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  useEffect(() => {
    if (
      location.pathname.toLowerCase() === "/dashboard/details" ||
      location.pathname.toLowerCase() === "/dashboard/newmail"
    ) {
      setSearch(false);
    } else {
      setSearch(true);
    }
  }, [location]);

  return (
    <div className="container__main__header">
      <div className="container__main__header__left">
        <button
          onClick={() => {
            setSidebarOpen(true);
          }}
          className="container__main__header__left__button__menu"
        >
          <Menu size={20} color="currentColor" />
        </button>
        <div className="container__main__header__left__heading">
          {search ? (
            <div className="container__main__header__left__heading__search__entry">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8874 14.9611H14.5416C14.2646 14.8842 14.0637 14.6975 13.8666 14.4999C13.0229 13.6492 12.1763 12.8016 11.3267 11.9572C11.2906 11.9211 11.2525 11.8865 11.2114 11.8489L11.1223 11.9119C10.1605 12.6108 9.02214 13.0262 7.83631 13.1108C6.81397 13.1877 5.81738 13.0443 4.87611 12.6305C2.7838 11.7082 1.49522 10.1266 1.02151 7.88554C0.969642 7.63922 0.944669 7.38598 0.90625 7.13813V6.21589C0.927765 6.05526 0.944669 5.89426 0.971179 5.7344C1.22974 4.1297 1.96162 2.78207 3.21255 1.74263C4.75355 0.463014 6.53351 -3.24771e-05 8.50326 0.336586C9.92746 0.579828 11.1231 1.26805 12.1093 2.32517C13.8839 4.22692 14.3161 7.1854 13.1447 9.50753C12.9641 9.86528 12.7451 10.2031 12.53 10.5758C12.5675 10.6011 12.603 10.6291 12.6364 10.6596C13.5185 11.5403 14.3998 12.4217 15.2804 13.3037C15.3425 13.3636 15.4003 13.4278 15.4533 13.4959C15.5357 13.6055 15.5924 13.7322 15.6192 13.8667C15.646 14.0012 15.6422 14.14 15.6081 14.2728C15.5741 14.4057 15.5105 14.5292 15.4223 14.6341C15.334 14.7391 15.2233 14.8228 15.0983 14.8792C15.0295 14.9092 14.9577 14.9338 14.8874 14.9611ZM7.37566 2.12267C6.77467 2.12156 6.17936 2.23903 5.62383 2.46836C5.06829 2.6977 4.56345 3.03439 4.1382 3.45915C3.71295 3.88392 3.37565 4.38841 3.14561 4.94375C2.91558 5.49908 2.79732 6.09435 2.79763 6.69546C2.79555 7.29803 2.91257 7.89508 3.14195 8.45227C3.37133 9.00946 3.70855 9.51582 4.13424 9.94223C4.55992 10.3686 5.06566 10.7067 5.6224 10.937C6.17914 11.1672 6.77589 11.2852 7.37835 11.284C7.98072 11.2844 8.57724 11.1658 9.13369 10.9351C9.69015 10.7044 10.1956 10.366 10.6211 9.93954C11.0465 9.51303 11.3836 9.00672 11.613 8.44963C11.8424 7.89254 11.9596 7.29564 11.9579 6.69315C11.9576 6.09196 11.8388 5.49673 11.6083 4.94153C11.3777 4.38632 11.04 3.88203 10.6144 3.45752C10.1888 3.033 9.68363 2.6966 9.1279 2.46755C8.57216 2.2385 7.97673 2.1213 7.37566 2.12267Z"
                  fill="#171321"
                />
              </svg>
              <input type="text" placeholder="Search mail" />
            </div>
          ) : (
            <div
              onClick={() => {
                navigate(-1);
              }}
              className="container__main__header__left__heading__back__btn"
            >
              <button>Back</button>
            </div>
          )}
        </div>
      </div>
      <div className="container__main__header__right__entry">
        <Link
          to="/createownyourmail"
          style={{ marginRight: ".5em" }}
          className="pricing__button"
        >
          Pricing
        </Link>
        <Link to="/dashboard/profile" className="pricing__button">
          <svg
            style={{ marginRight: ".5em" }}
            width="13"
            height="12"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.46845 9.25135C6.31243 9.23649 5.20899 8.76786 4.3979 7.94728C3.58681 7.1267 3.1336 6.02047 3.13673 4.86896C3.15037 2.46564 5.15309 0.480294 7.55447 0.500148C8.13608 0.505471 8.71092 0.62497 9.24611 0.851807C9.78129 1.07864 10.2663 1.40837 10.6734 1.82211C11.0805 2.23585 11.4017 2.72549 11.6187 3.263C11.8356 3.80052 11.944 4.37536 11.9376 4.95464C11.9145 7.35691 9.92858 9.26598 7.46845 9.25135Z"
              fill="currentColor"
            />
            <path
              d="M0.0846383 14.6138C0.0510673 13.7298 0.343764 12.9785 0.844182 12.315C2.00763 10.7643 3.63792 10.0924 5.5179 10.035C7.09154 9.98794 8.66519 9.96809 10.2294 10.1092C12.0737 10.2763 13.6043 11.1269 14.5254 12.7988C14.816 13.3212 14.9199 13.9545 15.135 14.6169L0.0846383 14.6138Z"
              fill="currentColor"
            />
          </svg>
          Hammad
        </Link>
      </div>
    </div>
  );
}
