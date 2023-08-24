import { useState, useEffect } from "react";
import { getPosts } from "../API";
import MakePost from "./MakePost";
import DeleteUserPost from "./DeletePost";
import { useAuth } from "./Auth";
import { registerUser } from "../API";
import { Link } from "react-router-dom";
import Searchbar from "./Search";

export default function UserPosts() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function retrievePosts() {
      const response = await getPosts();
      setPosts(response);
    }
    retrievePosts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = posts.filter((post) => post.title.includes(searchTerm));
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts([]);
    }
  }, [searchTerm, posts]);

  const poststoDisplay = searchTerm.length > 0 ? filteredPosts : posts;

  return (
    <div className="allPosts">
      <h1>Posts</h1>
      <Searchbar onSearch={setSearchTerm} />
      <MakePost />
      {registerUser && (
        <li>
          <Link to="/makepost">
            Would you like to post your item? Click here!
          </Link>
        </li>
      )}
      {poststoDisplay.map((post) => (
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
      ))}
    </div>
  );
}
