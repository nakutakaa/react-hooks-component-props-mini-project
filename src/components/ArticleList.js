import Article from './Article.js';
function ArticleList({ posts = [] }) {
    return (
      <main className="article-container">
        {posts.map((post) => (
          <Article
            key={post.id} 
            title={post.title}
            preview={post.preview}
            image={post.image}
            
          />
        ))}
      </main>
    );
}
export default ArticleList;