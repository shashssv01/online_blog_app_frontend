import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../../services/api";
import { Blog } from "../../models/Blog";
import "./BlogList.css";
import Loading from "../Loading/Loading";

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getBlogs();
        if (!res) {
          throw new Error(`Error: Response error`);
        }
        // const result: Blog[] = await res.json();
        setPosts(res);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setPosts([]); // Clear posts in case of error
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render states
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;
  }

  return (
    <div className="bloglist-div">
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/posts/${post._id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
