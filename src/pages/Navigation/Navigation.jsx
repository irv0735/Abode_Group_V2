import { useContext } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.css";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navbar bg-base-100">
        <h1>
          <a href="/#home" className="btn btn-ghost normal-case text-xl">
            Abode Group
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a
                href="/all-properties"
                className="btn btn-ghost normal-case text-xl"
              >
                View All Properties
              </a>
            </li>
            <li>
              <a
                href="/#area-info"
                className="btn btn-ghost normal-case text-xl"
              >
                Area Info
              </a>
            </li>
            <li>
              <a
                href="/#about-us"
                className="btn btn-ghost normal-case text-xl"
              >
                About Us
              </a>
            </li>
            {currentUser ? (
              <li onClick={signOutUser}>
                <a href="/" className="btn btn-ghost normal-case text-xl">
                  SIGN OUT
                </a>
              </li>
            ) : (
              <li>
                <a href="/admin" className="btn btn-ghost normal-case text-xl">
                  Admin
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
