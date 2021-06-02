import React from "react";
import Link from "next/link";

function BlogPost() {
  const linkBlog = "/blogs/test";

  return (
    <section className="blog-area ptb-110">
      <div className="container">
        <div className="section-title">
          <h2>MagicBlogs</h2>
          <p>Conoce nuestra sección informativa </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="entry-thumbnail">
                <Link href={linkBlog}>
                  <a>
                    <img src="/images/blog/blog1.jpg" alt="image" />
                  </a>
                </Link>
              </div>

              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <Link href="/#">
                        <a>Admin</a>
                      </Link>
                    </li>
                    <li>10 Marzo, 2020</li>
                  </ul>
                </div>

                <h3>
                  <Link href={linkBlog}>
                    <a>
                      Descubre 5 estrategias para que tu hijo recupere la
                      motivación
                    </a>
                  </Link>
                </h3>

                <p>
                  Si detectas que tu hijo está pasando por una situación de
                  desmotivación escolar, actúa rápido. Busca ayuda externa a
                  través de profesionales expertos en niños y adolescentes. Si
                  lo dejas pasar, no le das importancia o piensas que tu hijo va
                  a ser capaz de superar esta situación solo, el problema se
                  agravará y afectará a otras áreas de su vida....
                </p>

                <Link href={linkBlog}>
                  <a className="learn-more-btn">
                    Leer más.. <i className="flaticon-add"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="entry-thumbnail">
                <Link href={linkBlog}>
                  <a>
                    <img src="/images/blog/blog2.jpg" alt="image" />
                  </a>
                </Link>
              </div>

              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <Link href="/#">
                        <a>Admin</a>
                      </Link>
                    </li>
                    <li>11 Marzo, 2020</li>
                  </ul>
                </div>

                <h3>
                  <Link href={linkBlog}>
                    <a>
                      Mi hija es solitaria pero no hace nada para cambiarlo.
                      ¿Debería forzarla a hacer planes y participar en
                      actividades grupales?
                    </a>
                  </Link>
                </h3>
                <p>
                  Pocas cosas perturban más que ver a su hijo quedarse solo
                  después de clases mientras que los demás se han ido a jugar
                  con sus amigos. O descubrir que su hijo almuerza solo en la
                  escuela. O ver a su adolescente malhumorado en la casa durante
                  los fines de semana porque no tiene nadie con quien salir....
                </p>

                <Link href={linkBlog}>
                  <a className="learn-more-btn">
                    Leer más... <i className="flaticon-add"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="single-blog-post">
              <div className="entry-thumbnail">
                <Link href={linkBlog}>
                  <a>
                    <img src="/images/blog/blog3.jpg" alt="image" />
                  </a>
                </Link>
              </div>

              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <Link href="/#">
                        <a>Admin</a>
                      </Link>
                    </li>
                    <li>12 Marzo, 2020</li>
                  </ul>
                </div>

                <h3>
                  <Link href={linkBlog}>
                    <a>
                      Cómo ayudar a su hijo con la tarea escolar: Demuestre que
                      la educación y la tarea son importantes para usted.
                    </a>
                  </Link>
                </h3>
                <p>
                  Las investigaciones científicas demuestran claramente que los
                  niños son mucho más aptos a tener éxito en el aprendizaje
                  cuando sus familias los apoyan activamente. Cuando las
                  familias leen con sus hijos, dialogan con sus maestros,
                  participan en la escuela o en otras actividades educativas y
                  les ayudan con sus tareas escolares, les otorgan una gran
                  ventaja....
                </p>

                <Link href={linkBlog}>
                  <a className="learn-more-btn">
                    Leer más... <i className="flaticon-add"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape-img2">
        <img src="/images/shape/shape2.svg" alt="image" />
      </div>
      <div className="shape-img3">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="shape-img4">
        <img src="/images/shape/shape4.svg" alt="image" />
      </div>
      <div className="shape-img5">
        <img src="/images/shape/shape5.svg" alt="image" />
      </div>
      <div className="shape-img7">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="dot-shape1">
        <img src="/images/shape/dot1.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot2.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot3.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot4.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot5.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot6.png" alt="image" />
      </div>
    </section>
  );
}

export default BlogPost;
