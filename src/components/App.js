import React from "react";
import blogData from "../data/blog";
import Header from './Header.js';
import About from './About.js';
import ArticleList from './ArticleList.js';

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="React Blog" />
      <ArticleList posts={blogData.posts} />
      
      <About image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAF_LGcYFQHxCvHxXJWdoAY_w0RvLBVpdU6-hRGQ7n5CkGrpsmY_eMbC2KzvQV5HvAB4&usqp=CAU'/>
    </div>
  );
}

export default App;
