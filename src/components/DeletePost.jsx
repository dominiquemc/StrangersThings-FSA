import {useAuth} from "./Auth"
export default function DeleteUserPost({ postId, authorId, userId }) {
    const { isLoggedIn, user } = useAuth();
  
    const deletePost = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-a/posts/${postId}`,
          {
            method: "DELETE",
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
        console.error(err);
      }
    };
  
    if (!isLoggedIn || userId !== user?._id) {
      return null;
    }
  
    return (
      <button onClick={deletePost} className="delete-btn">
        Delete
      </button>
    );
  }