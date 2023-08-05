// APIs go here:

const COHORT_NAME = "2302-ACC-CT-WEB-PT-A";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/`;

// GET POSTS

export const getPosts = async () => {
  try {
    const post = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
    };
    const response = await fetch(`${BASE_URL}posts`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//   try {
//     const response = await fetch(`${BASE_URL}posts`);
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };
