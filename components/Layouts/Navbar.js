import React, { useState, useEffect } from "react";
import Link from "../../utils/ActiveLink";
import { useRouter } from "next/router";
import Icons from "../../utils/Icons";
import Colors from "../../utils/Colors";

export default function Navbar() {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  // Language Support
  const { locale, locales, asPath, reload } = useRouter();

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
    let idiomaResp = document.getElementById("idiomaSelector");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
        idiomaResp.classList.add("idiomas-alt");
      } else {
        elementId.classList.remove("is-sticky");
        idiomaResp.classList.remove("idiomas-alt");
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

  const updateLocale = () => {
    setTimeout(() => {
      reload();
    }, 10);
  };

  return (
    <>
      <div className="bg-white container-fluid prenavPad">
        <div id="prenavbar">
          <div>
            <a href="tel:+17863012529">
              <Icons icon="phone" color={Colors("red")} />
              <span>+1 (786) 301-2529</span>
            </a>
          </div>
          <div>
            <a href="mailto:info@amagicmindus.com?subject=Information%20Request%20-%20WebLink.1&body=Hi%20I%20want%to%request%more%information%about%Magic%Mind:">
              <Icons icon="email" color={Colors("orange")} />
              <span>info@amagicmindus.com</span>
            </a>
          </div>
          <div>
            <Link href="#">
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
                    src="/images/logo.png"
                    className="main-logo"
                    alt="logo"
                  />
                  <img
                    src="/images/logo.png"
                    className="optional-logo"
                    alt="logo"
                  />
                </a>
              </Link>

              <div id="idiomaSelector" className="idiomas">
                {idioma === "es-ES" ? "Idioma" : "Language"}:{" "}
                {locales.map((l, i) => {
                  return (
                    <span
                      key={i}
                      className={l === locale ? "idiomaActivo" : ""}
                    >
                      <Link href={asPath} locale={l}>
                        <a onClick={updateLocale}>
                          {l.slice(0, 2).toUpperCase() === "ES" ? (
                            <img
                              src="/images/icons/flag_spain.png"
                              className="flag-icon"
                              alt="Spanish"
                            />
                          ) : (
                            <img
                              src="/images/icons/flag_usa.png"
                              className="flag-icon"
                              alt="English"
                            />
                          )}
                        </a>
                      </Link>
                    </span>
                  );
                })}
              </div>

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
                        {idioma === "es-ES" ? "Inicio" : "Home "}
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        {idioma === "es-ES" ? "Servicios" : "Services "}
                        <i className="fas fa-chevron-down"></i>
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
                            {idioma === "es-ES"
                              ? "Membresías"
                              : "Magic Memberships"}
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/MagicActivities">
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
                        {idioma === "es-ES" ? "Nosotros" : "About Us "}
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/#MainBlogs">
                      <a className="nav-link" onClick={toggleNavbar}>
                        Blogs
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact">
                      <a
                        className="btn btn-primary fix-btn"
                        onClick={toggleNavbar}
                      >
                        {idioma === "es-ES"
                          ? "Tienes Dudas?"
                          : "Have questions? "}
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

                  <div className="idiomaSelector-big">
                    {locales.map((l, i) => {
                      return (
                        <span
                          key={i}
                          className={l === locale ? "idiomaActivo" : ""}
                        >
                          <Link href={asPath} locale={l}>
                            <a onClick={updateLocale}>
                              {l.slice(0, 2).toUpperCase() === "ES" ? (
                                <img
                                  src="/images/icons/flag_spain.png"
                                  className="flag-icon"
                                  alt="Spanish"
                                />
                              ) : (
                                <img
                                  src="/images/icons/flag_usa.png"
                                  className="flag-icon"
                                  alt="English"
                                />
                              )}
                            </a>
                          </Link>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
