import React from "react";
import PageBanner from "../../../components/Common/PageBanner";

function Books() {
  return (
    <>
      <PageBanner
        pageTitle="Magic Books"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Books"
        bgImgClass="item-bg2"
      />

      <div className="shop-area ptb-110">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 col-sm-6">
                <div className="woocommerce-result-count">
                  <p>Mostrando 1-8 de 14 resultados</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="woocommerce-topbar-ordering">
                  <select className="form-select">
                    <option value="1">Clasificación por defecto</option>
                    <option value="2">Clasificar por popularidad</option>
                    <option value="0">Clasificar por calificación media</option>
                    <option value="3">Ultimo visto</option>
                    <option value="4">Clasificar por precio: bajo</option>
                    <option value="5">Clasificar por precio: alto</option>
                    <option value="6">Articulos nuevos</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <a href="#">
                    <img src="/images/shop/product1.jpg" alt="image" />
                    <img src="/images/shop/product-hover1.jpg" alt="image" />
                  </a>

                  <a href="#" className="add-to-cart-btn">
                    Agregar al carrito <i className="fas fa-cart-plus"></i>
                  </a>
                </div>

                <div className="product-content">
                  <h3>
                    <a href="#">Magic Libros</a>
                  </h3>
                  <div className="price">
                    <span className="new">$8.50</span>
                    <span className="old">$12.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <a href="#">
                    <img src="/images/shop/product2.jpg" alt="image" />
                    <img src="/images/shop/product-hover2.jpg" alt="image" />
                  </a>

                  <a href="#" className="add-to-cart-btn">
                    Agregar al carrito <i className="fas fa-cart-plus"></i>
                  </a>

                  <div className="sale-btn">Oferta!</div>
                </div>

                <div className="product-content">
                  <h3>
                    <a href="#">MagicLibro</a>
                  </h3>
                  <div className="price">
                    <span className="new">$12.50</span>
                    <span className="old">$20.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <a href="#">
                    <img src="/images/shop/product3.jpg" alt="image" />
                    <img src="/images/shop/product-hover3.jpg" alt="image" />
                  </a>

                  <a href="#" className="add-to-cart-btn">
                    Agregar al carrito <i className="fas fa-cart-plus"></i>
                  </a>
                </div>

                <div className="product-content">
                  <h3>
                    <a href="#">MagicLibro</a>
                  </h3>
                  <div className="price">
                    <span className="new">$8.50</span>
                    <span className="old">$12.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <a href="#">
                    <img src="/images/shop/product4.jpg" alt="image" />
                    <img src="/images/shop/product-hover4.jpg" alt="image" />
                  </a>

                  <a href="#" className="add-to-cart-btn">
                    Agregar al carrito <i className="fas fa-cart-plus"></i>
                  </a>
                </div>

                <div className="product-content">
                  <h3>
                    <a href="#">MagicLibros</a>
                  </h3>
                  <div className="price">
                    <span className="new">$7.50</span>
                    <span className="old">$11.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <a href="#">
                    <img src="/images/shop/product5.jpg" alt="image" />
                    <img src="/images/shop/product-hover5.jpg" alt="image" />
                  </a>

                  <a href="#" className="add-to-cart-btn">
                    Agregar al carrito <i className="fas fa-cart-plus"></i>
                  </a>
                </div>

                <div className="product-content">
                  <h3>
                    <a href="#">MagicLibros</a>
                  </h3>
                  <div className="price">
                    <span className="new">$10.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <a href="#">
                    <img src="/images/shop/product6.jpg" alt="image" />
                    <img src="/images/shop/product-hover6.jpg" alt="image" />
                  </a>

                  <a href="#" className="add-to-cart-btn">
                    Agregar al carrito <i className="fas fa-cart-plus"></i>
                  </a>
                </div>

                <div className="product-content">
                  <h3>
                    <a href="#">Magic Liubros ultimo </a>
                  </h3>
                  <div className="price">
                    <span className="new">$15.00</span>
                    <span className="old">$20.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>
                <a href="#" className="page-numbers">
                  1
                </a>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
