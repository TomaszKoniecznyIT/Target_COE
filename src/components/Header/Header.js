import logo from "../.././assets/target.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Calculating Sales Targets</h1>
    </header>
  );
};

export default Header;
