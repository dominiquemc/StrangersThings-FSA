import { useState, useEffect } from "react";
import { getPosts } from "../API";
import MakePost from "./MakeAPost";
import DeleteUserPost from "./DeletePost";
import { useAuth } from "./Auth";
import { ToastContainer, toast } from "react-toastify";
import { registerUser } from "../API";
import { Link } from "react-router-dom";


export default function UserPosts() {
  const { user } = useAuth();
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

      <MakePost />

      {registerUser && (
            <li>
              <Link to="/makepost">Would you like to post your item? Click here!</Link>
            </li>
          )}
      {/* searchbar space */}

      {posts.map((post) => {
        return (
          <div key={post._id}>
            <ul className="posts">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <li>Price: {post.price}</li>
              <li>Seller: {post.author.username}</li>
              <li>Location: {post.location}</li>
              <DeleteUserPost
                postId={post._id}
                authorId={post.author._id}
                userId={user?._id}
              />
            </ul>
          </div>
        );
      })}
    </div>
  );
}
