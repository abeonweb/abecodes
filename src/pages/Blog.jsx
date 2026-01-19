import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadAllPosts } from "../lib/postLoader";
import "../css/Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await loadAllPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="blog">
        <h1 className="title page-title">Blog</h1>
        <p>Loading posts...</p>
      </section>
    );
  }

  return (
    <section className="blog">
      <h1 className="title page-title">Blog</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="post"
            onClick={() => navigate(`/blog/${post.slug}`)}
            style={{ cursor: "pointer" }}
          >
            {post.metadata.image && (
              <img
                src={require(`../images/${post.metadata.image}`)}
                alt={post.metadata.title}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  objectPosition:"top",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
            )}
            <h2 className="post-title">{post.metadata.title}</h2>
            <p
              className="post-meta"
              style={{ color: "#666", fontSize: "0.9rem" }}
            >
              {new Date(post.metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="post-excerpt">{post.metadata.excerpt}</p>
            <p style={{ color: "#0066cc", fontSize: "0.9rem" }}>Read more →</p>
          </div>
        ))}
      </div>
    </section>
  );
}
