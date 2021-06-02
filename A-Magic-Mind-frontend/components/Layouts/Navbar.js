import React, { useState, useEffect } from "react";
import Link from "../../utils/ActiveLink";
import { useRouter } from "next/router";

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
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
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
                    <Link href="/" activeClassName="active">
                      <a className="nav-link">Inicio</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Servicios <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/playpals"
                          activeClassName="active"
                        >
                          <a className="nav-link">PlayPals</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/custom" activeClassName="active">
                          <a className="nav-link">Servivio Personalizado</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us">
                      <a className="nav-link">Nosotros</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blogs" activeClassName="active">
                      <a className="nav-link">Blogs</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contacto</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Productos <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/products/books" activeClassName="active">
                          <a className="nav-link">Libros</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/products/videos" activeClassName="active">
                          <a className="nav-link">Videos</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/products/toys" activeClassName="active">
                          <a className="nav-link">Juguetes</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/products/merchandise"
                          activeClassName="active"
                        >
                          <a className="nav-link">Mercancías</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="others-options">
                  {isProducts ? (
                    <>
                      <Link href="/cart">
                        <a className="cart-btn">
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
                                placeholder="Search"
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
                    <a className="btn btn-primary">Tienes Dudas?</a>
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
