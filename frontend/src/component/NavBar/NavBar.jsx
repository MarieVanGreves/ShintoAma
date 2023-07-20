import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo_ShintoAma.png";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            className={styles.ShintoAmaLogo}
            src={logo}
            alt="Logo du ShintoAma"
            href="/#"
          />
        </Link>
      </div>

      <ul className={styles.navListsContainer}>
        <li className={styles.navText}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.menuActive : styles.navbarLink
            }
          >
            Accueil
            <div className={styles.underline} />
          </NavLink>
        </li>
        <li className={styles.navText}>
          <NavLink
            to="/temples"
            className={({ isActive }) =>
              isActive ? styles.menuActive : styles.navbarLink
            }
          >
            Temples sacrés
            <div className={styles.underline} />
          </NavLink>
        </li>

        <li className={styles.navText}>
          <NavLink
            to="/histoire"
            className={({ isActive }) =>
              isActive ? styles.menuActive : styles.navbarLink
            }
          >
            Histoire du Shintoïsme
            <div className={styles.underline} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
