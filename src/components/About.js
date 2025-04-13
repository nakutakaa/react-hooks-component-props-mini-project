function About({ image = "", preview = "About this blog" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{preview}</p>
    </aside>
  );
} 
export default About;