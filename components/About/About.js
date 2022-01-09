import React, { Component } from "react";
import { withRouter } from "next/router";

class AboutContact extends Component {
  render() {
    const idioma = this.props.router.locale;

    return (
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about/about1.jpg" alt="image" />
                <img src="/images/about/about2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>
                  {idioma === "es-ES" ? "Nuestra Fundadora" : "Our Founder "}
                </h2>
                <p>
                  {idioma === "es-ES"
                    ? "Maryangelica Torres es Licenciada en Educación, graduada en la Universidad Católica Andrés Bello - Caracas Venezuela. Tiene una especialización en Terapia de Juegos para niños. Maestra de preescolar. Con 26 años de experiencia en crianza y desarrollo del niño, motivada para ayudar a los niños a ser felices y saludables a nivel físico, emocional, cognitiva y psicológicamente.Experta en diseñar actividades académicas que sean atractivas y divertidas para los niños. Entusiasta y talentosa en la enseñanza de artes visuales, música y teatro. Involucra a los niños con actividades diversas y divertidas que incluyen obras de teatro, instrumentos musicales, otros idiomas, manualidades y muchas más actividades de aprendizaje divertidas. Es emprendedora, fue también propietaria y directora de una productiva academia de inglés para niños."
                    : "Maryangelica Torres has a degree in Education, graduated from the Andrés Bello Catholic University - Caracas Venezuela. She has a specialization in Play Therapy for children. Kindergarden teacher. With 26 years of experience in child rearing and development, motivated to help children be happy and healthy physically, emotionally, cognitively and psychologically. Expert in designing academic activities that are attractive and fun for children. Enthusiastic and talented in teaching visual arts, music, and theater. Engage children with fun and diverse activities including plays, musical instruments, other languages, crafts, and many more fun learning activities. Always taking the parents into account as a basis in the process, especially in those moments when parents need more support."}
                </p>
                <p>
                  {idioma === "es-ES"
                    ? "“Mi mejor definición es FAMILIA. Soy maestra, terapeuta y mamá de crianza, trabajo con niños y sus familias por amor a ellos, disfruto al máximo esta aventura por el mundo de los chiquiticos, el cual es un mundo lleno de risas. Yo más que prepararlos para su futuro he aprendido de ellos lecciones de vida, pues los niños son más sabios que los adultos, solo tenemos que aprender a escuchar su idioma.”"
                    : "Entrepreneur, owner and director of a productive English academy for children. “My best definition is FAMILY. I am a teacher, therapist and foster mom, I work with children and their families out of love for them, I enjoy this adventure to the world of children, which is a world full of fantasy, affection, understanding and fun, but also concerns , sacrifices, doubts and sadness. More than preparing them for their future, I have learned life lessons from them, because children are wiser than adults, we only have to learn to listen to their language, for this reason I have focused on parents and caregivers to help them and teach them to enthusiasm, affection, understanding and fun but also worries, sacrifices, doubts and sadness that wonderful language and through Parents Club to be able to support and accompany them during the arduous work of raising and educating their children ”."}
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Magic Visión </h3>
                  <p>
                    {idioma === "es-ES"
                      ? "La visión de A MAGIC MIND es convertirse en un líder reconocido en la complementación de la educación temprana y de apoyo familiar. Ser una marca reconocida y admirada en la industria infantil, gracias a nuestros productos y servicios."
                      : "A MAGIC MIND's vision is to become a recognized leader in complementing early childhood education and family support. To be a recognized and an admired brand in the children's industry, thanks to our products and services. "}
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>
                    {idioma === "es-ES" ? "Magic Misión" : "Magic Mission "}
                  </h3>
                  <p>
                    {" "}
                    {idioma === "es-ES"
                      ? "La misión de A MAGIC MIND es proporcionar a los niños, un desarrollo y preparación personal, académico, social y cultural apropiados para el éxito en el aprendizaje a lo largo de sus vidas. Esta misión es alcanzada a través de la educación de calidad y el apoyo familiar. Nuestro programa provee el puente crucial al éxito en la educación desde que nacen hasta los 7 años de edad."
                      : "The mission of A MAGIC MIND is to provide children with appropriate personal, academic, social and cultural development and preparation for successful learning throughout their lives. This mission is achieved through quality extracurricular education and family support. Our program provides the crucial bridge to educational success from 2 years and 7 years old."}
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text nosotros-mounstro">
                  <div>
                    <h3>{idioma === "es-ES" ? "Magic Valores" : "Values"}</h3>
                    <p>
                      <ul>
                        <li>{idioma === "es-ES" ? "Etica" : "Ethics "} </li>
                        <li>
                          {" "}
                          {idioma === "es-ES"
                            ? "Familiaridad"
                            : "Familiarity "}{" "}
                        </li>
                        <li>{idioma === "es-ES" ? "Respeto" : "Respect "} </li>
                        <li>
                          {" "}
                          {idioma === "es-ES"
                            ? "Responsabilidad"
                            : "Responsability "}
                        </li>
                        <li>
                          {" "}
                          {idioma === "es-ES" ? "Honestidad" : "Honesty"}{" "}
                        </li>
                        <li>
                          {" "}
                          {idioma === "es-ES" ? "Solidaridad" : "Solidarity "}
                        </li>
                        <li>
                          {" "}
                          {idioma === "es-ES"
                            ? "Trabajo en equipo"
                            : "Teamwork "}{" "}
                        </li>
                      </ul>
                    </p>
                  </div>
                  <img src="/images/Mounstrico.png" className="mounstro-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
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
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    );
  }
}

export default withRouter(AboutContact);
