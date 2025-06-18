import React from "react";
import { useState } from "react";

import "./mobile-menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faAngleDown,
  faList, faPercent, faRocket, faTruck, faUser, faHeadset
} from "@fortawesome/free-solid-svg-icons";

function MobileMenu({ closeMobileMenu }) {
  let anlgleIcon = faAngleDown;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-menu">
      <div className="menu-container">
        <div className="menu-header">
          <img src="/techstore-berhad.png" alt="logo" />
          <button className="close-menu-btn" onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="menu-body">
          <ul>
            <div>
              <li className="category-menu" onClick={handleClick}>
                <FontAwesomeIcon icon={faList} />
                Categories
                <FontAwesomeIcon className="angle-icon"
                  icon={anlgleIcon}
                  style={{
                    transform: `rotate(${isOpen ? -180 : 0}deg)`,
                    transition: "transform 0.3s ease",
                  }}
                />
              </li>
              {isOpen && (
                <ul className="sub-menu">
                  <li>Smartphones</li>
                  <li>Computers & Laptops</li>
                  <li>Gaming Gear</li>
                  <li>Smart Home</li>
                  <li>Wearables</li>
                  <li>Audio & Video</li>
                </ul>
              )}
              <li><FontAwesomeIcon icon={faPercent} />Deals</li>
              <li><FontAwesomeIcon icon={faRocket} />What's New</li>
              <li><FontAwesomeIcon icon={faTruck} />Delivery</li>
            </div>
            <button className="account-btn"><FontAwesomeIcon icon={faUser} />Account</button>
          </ul>
          <button className="support-btn"><FontAwesomeIcon icon={faHeadset} />Support</button>
        </div>
      </div>
      <div className="empty-space" onClick={closeMobileMenu}></div>
    </div>
  );
}

export default MobileMenu;
