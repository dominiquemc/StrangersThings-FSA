import { useState, useEffect } from "react";
import { useAuth } from "./Auth";

export default function UserProfile() {
  const [userProfilePosts, setUserProfilePosts] = useState([]);
  const { user } = useAuth();

  const myData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-a/users/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error("Error fetching user data", err);
      throw err;
    }
  };

  useEffect(() => {
    async function retrieveUserPosts() {
      try {
        const response = await myData();
        console.log("API RESPONSE", response);
        setUserProfilePosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching user profile posts", error);
      }
    }

    retrieveUserPosts();
  }, []);

  console.log("userProfilePosts", userProfilePosts);

  return (
    <div className="profile">
      <h1>Welcome, {user && user.username}</h1>
      <h3>Messages to Me</h3>
      {userProfilePosts?.map((post) => (
        <div key={post._id}>
          <p>{post.location}</p>
          <p>{post.willDeliver}</p>

          <ul className="userPosts">
            {post.messages.map((message) => (
              <li key={message._id}>
                <strong>{message.fromUser.username}</strong>
                <p>{message.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {console.log("RENDERED PROFILE POSTS", userProfilePosts)}
    </div>
  );
}
