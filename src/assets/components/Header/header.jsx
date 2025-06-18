import { useState, useEffect } from "react";

import "./header.css";
import MobileMenu from "../mobile-menu/mobile-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faUser,
  faCartShopping,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import categories from "../../data/categories.json";

function TopBar() {
  const [open, setOpen] = useState(false);

  const allLanguages = [
    {
      label: "Pt-BR",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/960px-Flag_of_Brazil.svg.png",
    },
    {
      label: "Eng",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    },
    {
      label: "Esp",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_Spain_%28civil%29.svg",
    },
  ];

  const [selectedLang, setSelectedLang] = useState("Eng");
  const currentLang = allLanguages.find((lang) => lang.label === selectedLang);
  const availableLangs = allLanguages.filter(
    (lang) => lang.label !== selectedLang
  );

  const toggle = () => setOpen((prev) => !prev);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setOpen(false);
  };

  return (
    <div className="top-bar">
      <p className="phone-number">+55 21 99999-9999</p>
      <p className="get-discount">Get 50% off on Selected Items | Shop Now</p>

      <div className="language-selector">
        <button className="language-dropdown" onClick={toggle}>
          <img className="flag" src={currentLang.img} alt={currentLang.label} />
          {currentLang.label}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>

        {open && (
          <ul className="languages-list">
            {availableLangs.map((lang) => (
              <li key={lang.label} onClick={() => handleSelect(lang.label)}>
                <img className="flag" src={lang.img} alt={lang.label} />
                {lang.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Header() {
  const [openCategories, setOpenCategories] = useState(false);
  const tougleCategories = () => setOpenCategories((prev) => !prev);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleMobileMenu = () => setOpenMobileMenu((prev) => !prev);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  const [openSearch, setOpenSearch] = useState(false);
  const toggleSearch = () => {
    if (isMobile) setOpenSearch(!openSearch);
  };

  return (
    <div>
      <TopBar />
      <header>
        <button className="mobile-btn" onClick={handleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div>
          {openMobileMenu && <MobileMenu closeMobileMenu={handleMobileMenu} />}
          <img className="logo" src="/techstore-berhad.png" alt="logo" />
          <div className="header-nav">
            <button className="categories-btn" onClick={tougleCategories}>
              Categories
              <FontAwesomeIcon icon={faAngleDown} />
              {openCategories && (
                <div className="categories-list">
                  <ul>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
            <button>Deals</button>
            <button>What's New</button>
            <button>Delivery</button>
          </div>
        </div>
        <div className="right-nav">
          <div className="search-bar">
            <input type="text" placeholder="Search" style={isMobile ? { width: `${openSearch ? '100%' : '0'}`, visibility: `${openSearch ? 'visible' : 'hidden'}`, transition: 'all 0.2s ease' } : {}} />
            <button onClick={toggleSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <button className="account-btn">
            <FontAwesomeIcon icon={faUser} />
            <span>Account</span>
          </button>
          <button className="cart-btn">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Cart</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
