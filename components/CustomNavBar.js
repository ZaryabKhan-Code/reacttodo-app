"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSignInAlt } from "react-icons/fa";
import "../static/nav.css";
import Image from "next/image";

const CustomNavBar = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setActiveNavItem(getNavItemFromPath(window.location.pathname));
  }, []);

  const handleNavLinkClick = (path) => {
    setActiveNavItem(getNavItemFromPath(path));
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const getNavItemFromPath = (path) => {
    const match = path.match(/\/([^/]+)/);
    return match ? match[1] : "home";
  };

  return (
    <>
      <div className="container mb-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <div className="container-fluid">
            <a className="navbar-brand" id="navbar-brand" href="#">
              <Image
                src="/icons8-tasklist-64.png"
                fill
                className="d-inline-block align-top"
                alt="tasklist"
                quality={100}
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <GiHamburgerMenu />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link
                  className={`nav-item nav-link ${
                    activeNavItem === "home" ? "active" : ""
                  }`}
                  id="nav-font"
                  href="/home"
                  onClick={() => handleNavLinkClick("/home")}
                >
                  Home
                </Link>
                <Link
                  className={`nav-item nav-link ${
                    activeNavItem === "features" ? "active" : ""
                  }`}
                  href="/features"
                  id="nav-font"
                  onClick={() => handleNavLinkClick("/features")}
                >
                  Features
                </Link>
                <Link
                  className={`nav-item nav-link ${
                    activeNavItem === "pricing" ? "active" : ""
                  }`}
                  href="/pricing"
                  id="nav-font"
                  onClick={() => handleNavLinkClick("/pricing")}
                >
                  Pricing
                </Link>
              </div>

              <div className="navbar-nav ms-auto text-center">
                <Link className="btn_" href="/">
                  <span className="btn-contant">
                    Sign In
                    <FaSignInAlt className="icon" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default CustomNavBar;
