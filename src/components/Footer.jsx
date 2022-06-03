import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="py-3 bg-dark fixed-bottom footer">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Abode Group 2022
          </p>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;