import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import Link from "next/link";
import { useRouter } from "next/router";

function BlogDetails() {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  return (
    <>
      <PageBanner
        pageTitle="Blogs"
        homePageUrl="/blogs"
        homePageText="Blogs"
        activePageText="Artículos"
        bgImgClass="item-bg3"
      />

      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div>
              <div className="blog-details">
                <div className="article-image">
                  <img src="/images/uploads/img_0858.jpg.jpg" alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted By: Damarys Yajure</span>
                      </li>
                    </ul>
                  </div>

                  <h2>
                    {idioma === "es-ES"
                      ? "Mordidas, golpes y peleas ¿Qué hacer?"
                      : "Biting, hitting and fighting. What to do? "}
                  </h2>

                  <p>
                    {idioma === "es-ES"
                      ? "Todos tenemos momentos de agresividad, pero como adultos los aprendemos a controlar, los niños sin embargo son muy seguido físicamente agresivos, muerden, golpean, pellizcan etc. Este comportamiento aparece aproximadamente después del primer año de vida y los padres luchan e intentan controlar este comportamiento destructivo pero…¿Cuál es la mejor manera? Mientras algunas mordidas pueden ocurrir de manera natural la persistencia de este comportamiento puede indicar que el niño si es mayor a cierta edad pueda tener algún problema conductual o emocional, si bien la mayoría de los niños especialmente varones, juegan de manera agresiva es normal y hasta positivo para su desarrollo socioemocional cuando las peleas, golpes y mordidas son muy frecuentes y se salen de control puede ser indicio de problemas severos de conducta o emocionales y este comportamiento debería ser remitido a profesionales."
                      : "We all have moments of aggressiveness, but as adults we learn to control them, children however are very often physically aggressive, they bite, hit, pinch etc. This behavior appears approximately after the first year of life and parents struggle and try to control this destructive behavior but… What is the best way? While some bites can occur naturally, the persistence of this behavior may indicate that the child, if he is older than a certain age, may have a behavioral or emotional problem, although most children, especially boys, play aggressively is normal and even positive for their socio-emotional development.When the fights, hits and bites are very frequent and get out of control, it can be an indication of severe behavioral or emotional problems and this behavior should be referred to professionals."}
                  </p>

                  <p>
                    {idioma === "es-ES"
                      ? "Mordidas. Muchos niños comienzan la edad de agresividad desde el año hasta los tres años aproximadamente. Las mordidas pueden ser una manera de probar el poder que tiene sobre otros para recibir atención. niños muerden para mostrar sus emociones más intensas como, emoción, felicidad, rabia, tristeza, ansiedad o celos. El mordisco también puede ser señal de una disciplina excesivamente fuerte o también que el niño ha sido expuesto a un ambiente de violencia física. Los padres no deben olvidar que cuando los bebés están dentando también pueden morder solo por curiosidad."
                      : "Bites. Many children begin the age of aggression from one year to about three years. Biting can be a way to test your power over others to get care. Children bite to show their most intense emotions such as excitement, happiness, anger, sadness, anxiety or jealousy. The bite can also be a sign of excessively strong discipline or also that the child has been exposed to an environment of physical violence. Parents should not forget that when babies are teething they can also bite just out of curiosity."}
                  </p>

                  <p>
                    {idioma === "es-ES"
                      ? "Que debemos hacer si nuestro hijo muerde?"
                      : "What should we do if our child bites? "}

                    <ul>
                      <li>
                        {idioma === "es-ES"
                          ? "Dile “duele”, inmediatamente si lo ves en acción, pero con voz calmada y firme que note que no es aceptable morder a las personas."
                          : "Say it hurts immediately if you see him in action, but with a calm and firm voice that you realize that it is not acceptable to bite people."}
                      </li>
                      <li>
                        {idioma === "es-ES"
                          ? "No muerdas al niño para “enseñarle “ cómo se siente, pues lo que estás logrando es reforzando el comportamiento."
                          : "Do not bite the child to teach how he feels, because what you are doing is reinforcing the behavior. "}
                      </li>
                      <li>
                        {idioma === "es-ES"
                          ? "Para niños entre 2 y 3 años dile firmemente mirándolo a los ojos y agarrándolo por los hombros “a las personas les duele cuando los muerdes” y lo sientas en una silla para pensar acerca del tema por 1 o 2 minutos respectivamente."
                          : "For children between 2 and 3 years old, say firmly looking into his eyes and grabbing him by the shoulders it hurts when you bite them and sit him in a chair to think about the subject for 1 or 2 minutes respectively. "}
                      </li>
                      <li>
                        {idioma === "es-ES"
                          ? "Para niños entre 3 y 4 años con firmeza le dices “morder no es aceptable, lastimas a las personas “ y llévalo a pensar sobre eso por 3 o 4 minutos respectivamente."
                          : "For children between 3 and 4 years old, you firmly tell him biting is not acceptable, you hurt people and get him to think about it for 3 or 4 minutes respectively. "}
                      </li>
                    </ul>
                  </p>

                  <blockquote className="wp-block-quote">
                    <p>
                      {" "}
                      {idioma === "es-ES"
                        ? "Si estas técnicas no funcionan deben consultarlo con un psicólogo infantil para que les de las herramientas y los ayuden a corregir este comportamiento."
                        : "If these techniques do not work, they should consult with a child psychologist so that they can give them the tools and help them correct this behavior. "}
                    </p>
                  </blockquote>

                  <ul className="wp-block-gallery columns-3 flex">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/blog/blog4.jpg" alt="image" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/blog/blog7.jpg" alt="image" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/clients/client2.jpg" alt="image" />
                      </figure>
                    </li>
                  </ul>

                  <h3>
                    {idioma === "es-ES"
                      ? "Peleas y Golpes"
                      : "Fights and blows"}
                  </h3>

                  <p>
                    {idioma === "es-ES"
                      ? "Los niños en edad maternal y preescolar pelean, generalmente, por juguetes. A veces los niños son premiados inconscientemente después de un comportamiento agresivo. Por ejemplo, un niño empuja al otro y le quita el juguete. Si el otro niño llora y se va el que empujo se siente exitoso en su comportamiento y lo continúa haciendo pues cumplió su objetivo otro ejemplo de premiarlo inconscientemente es la siguiente, un niño empuja a otro pues quiere un juguete el otro niño no llora sino que lo empuja de vuelta, el niño llora la maestra o mama lo ven lo abrazan y consuelan y le dan el juguete del otro niño en este caso también cumplió su objetivo. por esta razón es muy importante estar pendiente de la agresividad silenciosa de algunos niños"
                      : "Preschoolers and preschoolers often fight over toys. Sometimes children are unconsciously rewarded after aggressive behavior. For example, one child pushes the other and takes the toy away. If the other child cries and the one who pushed leaves feels successful in his behavior and continues to do so because he fulfilled his objective.Another example of rewarding him unconsciously is the following: one child pushes another because he wants a toy the other child does not cry but rather the teacher pushes him back, the child cries, the teacher or mother see him, hug him and console him and give him the other child's toy, in this case he also fulfilled his objective. for this reason it is very important to be aware of the silent aggressiveness of some children"}
                  </p>

                  <p>
                    {idioma === "es-ES" ? "Que hacer?" : "To do?"}

                    <ul>
                      <li>
                        {idioma === "es-ES"
                          ? "Es muy importante intervenir en una pelea de niños un poco antes de que se convierta en física (sin apoyar a un niño en específico, pues recuerden que ambos son niños)"
                          : "It is very important to intervene in a children's fight a little before it becomes physical (without supporting a specific child, remember that both are children)"}
                      </li>
                      <li>
                        {idioma === "es-ES"
                          ? "Cuando un niño pelea con frecuencia tiene que estar constantemente supervisado"
                          : "When a child fights frequently he has to be constantly supervised"}
                      </li>
                      <li>
                        {idioma === "es-ES"
                          ? "Cuando un niño golpea a otro, primero que nada consuelen al agredido y luego reprendan al agresor la mejor manera es sentándolo en tiempo fuera un minuto por cada año de edad explicándole porque está sentado."
                          : "When a child hits another, first of all comfort the victim and then reprimand the aggressor. The best way is to sit him in time out for one minute for each year of age, explaining why he is sitting."}
                      </li>
                      <li>
                        {idioma === "es-ES"
                          ? "Para bebés de 1 a 2 años con decirles “sin pegar eso duele” es suficiente"
                          : "For babies from 1 to 2 years, just saying without hitting that hurts is enough"}
                      </li>
                      <li>
                        {idioma === "es-ES"
                          ? "Para niños de 3 a 4 años decirles “se que estas molesto y te entiendo, pero, golpear lastima a las personas espero que no lo vuelvas a hacer”"
                          : "For children from 3 to 4 years old, tell them I know youre upset and I understand you, but hitting hurts people, I hope you don't do it again"}
                      </li>
                      <li>
                        {idioma === "es-ES"
                          ? "No golpees al niño por ningún motivo pues de esta forma lo enseñas golpear y si ya lo hace le refuerzas la conducta enviándole el mensaje que está bien hacerlo."
                          : "Do not hit the child for any reason because in this way you teach him to hit and if he already does, you reinforce his behavior by sending him the message that it is okay to do so."}
                      </li>
                    </ul>
                  </p>

                  <p>
                    {idioma === "es-ES"
                      ? "psicólogo infantil que ellos los ayudaran a modificarlo, lo cual no quiere decir que sea algo anormal en el desarrollo infantil pero hay que canalizarlo de la mejor manera para que aprenda el auto-control."
                      : "Children often hit out of frustration, sadness, or anger. You have to know how to distinguish the reason why you are hitting in order to control it, if you cannot control the behavior as with biting, approach a child psychologist that they will help them modify it, which does not mean that it is something abnormal in child development but it must be channeled in the best way so that it learns self-control."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetails;
