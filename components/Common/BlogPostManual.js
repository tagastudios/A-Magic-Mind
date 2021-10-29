import React from "react";
import Link from "next/link";
import { homeBlogContext } from "../Context/BlogProvider";
import { blogs as defaultBlog } from "../../content/settings/settings.json";
import parseMarkdown from "front-matter-markdown";

function BlogPost() {
  const blogs = homeBlogContext();
  const blogLinks = ["#", "#", "/blogs/blog3"];

  return (
    <section className="blog-area ptb-110">
      <div className="container" id="MainBlogs">
        <div className="section-title">
          <h2>Magic Blogs</h2>
          <p>Conoce nuestra sección informativa </p>
        </div>

        <div className="row">
          {blogs.map((blog, index) => {
            const { author, date, image, title, slug } = blog.attributes;
            console.log(blog.react);
            const img = image.replace(
              "https://a-magic-mind.netlify.app" ||
                "https://amagicmindus.com" ||
                "https://www.amagicmindus.com" ||
                "amagicmindus.com" ||
                "www.amagicmindus.com",
              ""
            );
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href={slug || blogLinks[index]}>
                      <a>
                        <img src={img} alt={title} />
                      </a>
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href={slug || blogLinks[index]}>
                            <a>{author || defaultBlog.author}</a>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <h3>
                      <Link href={slug || blogLinks[index]}>
                        <a>{title}</a>
                      </Link>
                    </h3>

                    <h2>{}</h2>

                    <Link href={slug || blogLinks[index]}>
                      <a className="learn-more-btn">
                        Leer más.. <i className="flaticon-add"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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
