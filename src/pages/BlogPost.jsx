import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { loadPostBySlug } from "../lib/postLoader";
import "../css/Blog.css";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await loadPostBySlug(slug);
        if (postData) {
          setPost(postData);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error loading post:", error);
        setNotFound(true);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <section className="section blog">
        <h1 className="title page-title">Blog</h1>
        <p>Loading post...</p>
      </section>
    );
  }

  if (notFound) {
    return (
      <section className="section blog">
        <button onClick={() => navigate("/blog")} className="back-button">
          ← Back to Posts
        </button>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <h2>Post Not Found</h2>
          <p>Sorry, the blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/blog")}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#0066cc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Return to Blog
          </button>
        </div>
      </section>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <section className="section blog">
      <button onClick={() => navigate("/blog")} className="back-button">
        ← Back to Posts
      </button>
      <article className="post-content">
        <h1>{post.metadata.title}</h1>
        <div
          className="post-meta"
          style={{ color: "#667", marginBottom: "1.5rem" }}
        >
          <span>By {post.metadata.author}</span> •
          <span>
            {" "}
            {new Date(post.metadata.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {post.metadata.tags && (
            <div style={{ marginTop: "0.5rem" }}>
              {post.metadata.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    marginRight: "0.5rem",
                    padding: "0.25rem 0.5rem",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </section>
  );
}
