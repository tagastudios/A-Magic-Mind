import React, { useState, useEffect } from "react";
import Link from "../../utils/ActiveLink";
import { useRouter } from "next/router";
import Icons from "../../utils/Icons";
import Colors from "../../utils/Colors";

export default function Navbar() {
  // Search Form
  const [searchForm, setSearchForm] = useState(false);
  const handleSearchForm = () => {
    setSearchForm(!searchForm);
  };

  // Navbar
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  // Is in prodcuts
  const filter = useRouter().pathname;
  const router = filter.includes("products") || filter.includes("cart");
  const [isProducts, setIsProducts] = useState(router);

  useEffect(() => {
    setIsProducts(router);
  }, [router]);

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }, []);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed nav-shadow"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div className="bg-white container-fluid prenavPad">
        <div id="prenavbar">
          <div>
            <a href="tel:+17863012529">
              <Icons icon="phone" color={Colors("red")} />
              <span>+1(786)301-2529</span>
            </a>
          </div>
          <div>
            <a href="mailto:info@magicmindus.com?subject=Information%20Request%20-%20WebLink.1&body=Hi%20I%20want%to%request%more%information%about%Magic%Mind:">
              <Icons icon="email" color={Colors("orange")} />
              <span>info@magicmindus.com</span>
            </a>
          </div>
          <div>
            <Link href="/login">
              <a>
                {/* <img src="/images/icons/sign-in-alt-solid.svg" /> */}
                <Icons icon="login" color={Colors("yellow")} />
                <span>Login</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        id="navbar"
        className={`navbar-area ${collapsed ? "" : "white-nav"}`}
      >
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/images/LOGO.png"
                    className="main-logo"
                    alt="logo"
                  />
                  <img
                    src="/images/LOGO.png"
                    className="optional-logo"
                    alt="logo"
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link" onClick={toggleNavbar}>
                        Inicio
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Servicios <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      {/* <li className="nav-item">
                        <Link href="/services/playpals">
                          <a className="nav-link" onClick={toggleNavbar}>
                            PlayPals
                          </a>
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link href="/services/MagicPlans">
                          <a className="nav-link" onClick={toggleNavbar}>
                            Magic Plans
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/custom">
                          <a className="nav-link" onClick={toggleNavbar}>
                            Magic Activities
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us">
                      <a className="nav-link" onClick={toggleNavbar}>
                        Nosotros
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blogs">
                      <a className="nav-link" onClick={toggleNavbar}>
                        Blogs
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link" onClick={toggleNavbar}>
                        Contacto
                      </a>
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link href="/#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Productos <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/products/books">
                          <a className="nav-link" onClick={toggleNavbar}>
                            Libros
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/products/videos">
                          <a className="nav-link" onClick={toggleNavbar}>
                            Videos
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/products/toys">
                          <a className="nav-link" onClick={toggleNavbar}>
                            Juguetes
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/products/merchandise">
                          <a className="nav-link" onClick={toggleNavbar}>
                            Mercancías
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                 */}
                </ul>

                <div className="others-options">
                  {isProducts ? (
                    <>
                      <Link href="/cart">
                        <a className="cart-btn" onClick={toggleNavbar}>
                          <i className="flaticon-commerce-and-shopping"></i>
                          <span>1</span>
                        </a>
                      </Link>

                      <div className="option-item">
                        <i
                          onClick={handleSearchForm}
                          className="search-btn flaticon-search"
                          style={{
                            display: searchForm ? "none" : "block",
                          }}
                        ></i>

                        <i
                          onClick={handleSearchForm}
                          className={`close-btn fas fa-times ${
                            searchForm ? "active" : ""
                          }`}
                        ></i>

                        <div
                          className="search-overlay search-popup"
                          style={{
                            display: searchForm ? "block" : "none",
                          }}
                        >
                          <div className="search-box">
                            <form className="search-form">
                              <input
                                className="search-input"
                                name="search"
                                placeholder="Buscar"
                                type="text"
                              />
                              <button className="search-button" type="submit">
                                <i className="fas fa-search"></i>
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <Link href="/contact">
                    <a className="btn btn-primary" onClick={toggleNavbar}>
                      Tienes Dudas?
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
