import { useState, useEffect } from "react";
import { getPosts } from "../API";

export default function UserPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function retrievePosts() {
      const response = await getPosts();
      setPosts(response);
    }
    retrievePosts();
  }, []);

  return (
    <div className="allPosts">
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <ul>
              <li>Price: {post.price}</li>
              <li>Seller: {post.author.username}</li>
              <li>Location: {post.location}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
