import posts from "../posts.js"

export default function Blog() {
  
  const allPosts = posts.map((post, index) =>(
      <div key={index} className="post">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.body}</p>
      </div>
    ))

  return (
      <section className="section blog">
        <h1 className="title page-title">Blog</h1>
        {allPosts}
      </section>
  );
}