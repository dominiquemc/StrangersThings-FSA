import { useState, useEffect } from "react";
import { getPosts } from "../API";

export default function UserPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function retrievePosts() {
      const response = await getPosts();
      const test2 = setPosts(response);
      console.log("This is a test", test2);
    }
    const test = retrievePosts();
    console.log("Hello", test);
  }, []);

  return (
    <div className="allPosts">
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
}
