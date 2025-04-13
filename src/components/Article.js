function Article({ title, date = "January 7, 2025", preview }){
    return (
      <article className="article">
        <h3>{title}</h3>
        <small>{date}</small>
        <p className="article-preview">{preview}</p>
      </article>
    );
}
export default Article;