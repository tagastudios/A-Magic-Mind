import { createContext, useContext } from "react";
import { blogs } from "../../content/settings/settings.json";

const BlogContext = createContext();

export function BlogProvider(props) {
  const { value, children } = props;

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export function allBlogContext() {
  return useContext(BlogContext);
}

export function homeBlogContext() {
  return useContext(BlogContext).slice(0, blogs.front_limit);
}

// const importAll = (r) => r.keys().map(r);
//   const markdownFiles = importAll(
//     require.context("../../content/blogs", false, /\.md$/)
//   )
//     .sort()
//     .reverse();
//   console.log(markdownFiles);
