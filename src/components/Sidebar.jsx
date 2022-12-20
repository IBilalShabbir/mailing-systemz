import { Link, NavLink } from "react-router-dom";
import { Plus, X } from "react-feather";

import { logo } from "../assets";

export default function Sidebar({ setSidebarOpen }) {
  const sidebarEnteries = [
    {
      name: "Inbox",
      path: "/dashboard",
    },
    {
      name: "Sent",
      path: "/dashboard/sent",
    },
  ];
  return (
    <div className="container__sidebar">
      <div className="container__sidebar__header">
        <Link to="/dashboard" className="sidebar">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="container__sidebar__button"
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          <X size={20} color="currentColor" />
        </button>
      </div>
      <div className="container__sidebar__entry">
        <Link
          to="/dashboard/newmail"
          className="container__sidebar__entry__btn"
        >
          <div>
            <Plus width={18} />
          </div>
          Compose New Email
        </Link>
      </div>
      <div className="container__sidebar__data">
        <div className="container__sidebar__content__inbox__entry">
          {sidebarEnteries.map((entry, index) => (
            <NavLink
              key={entry.path}
              to={entry.path}
              end={index === 0}
              onClick={() => {
                if (window.innerWidth < 850) {
                  setSidebarOpen(false);
                }
              }}
              className="container__sidebar__content__inbox__entry__btn"
            >
              {entry.name}
            </NavLink>
          ))}
        </div>
        <div className="container__sidebar__content__inbox__entry__log__out">
          <Link
            to="/"
            className="container__sidebar__content__inbox__entry__log__out__btn"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
