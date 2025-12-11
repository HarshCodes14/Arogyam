import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import styles from './page.module.css';

export default function Navbar() {
  return (
    <nav>
      <div className={styles.Navbar}>
        <div className="navbar-brand">
          <img src="/navbar-brand-logo-.png" alt="" />
        </div>
        
        <div className={styles.second}>

            <div className={styles.rightNav}>
            <CiSearch />
            <input
                type="text"
                placeholder="Search for anything..."
                className={styles.inputField}
            />
            </div>
            <div className={styles.notification}><IoNotificationsOutline /></div>

            <div className={styles.third}>
                <p>Lorem Ipsum <br />  </p>
                <div>
                    <img src="/navimg.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
}
