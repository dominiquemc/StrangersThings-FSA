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
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <ul className="posts">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
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
