import { useState } from "react";

const MakePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [seller, setSeller] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token')
            console.log(token)
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-a/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    post: {
                        title,
                        description,
                        price,
                        seller,
                        location,
                        willDeliver,
                    }
                })
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const isLoggedIn = !! localStorage.getItem('token');

    return (
        <div className='makePost'>
            <h2>Add New Post</h2>
            {isLoggedIn ? (
                    <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                type='text'
                value={title}
                onChange={(e)=> setTitle(e.target.value)} />

                <label>Description:</label>
                <textarea
                value={description}
                onChange={(e)=> setDescription(e.target.value)} />

                <label>Price:</label>
                <input
                type='text'
                value={price}
                onChange={(e)=> setPrice(e.target.value)} />

                <label>Seller:</label>
                <input
                type='text'
                value={seller}
                onChange={(e)=> setSeller(e.target.value)} />

                <label>Location:</label>
                <input
                type='text'
                value={location}
                onChange={(e)=> setLocation(e.target.value)} />

                <label>Will Deliver</label>
                <input
                type='checkbox'
                checked={willDeliver}
                onChange={(e)=> setWillDeliver(e.target.value)} />

                <button type='submit'>Submit Form</button>
            </form>           
            ) : ( 
                <p>Please log in to make a post.</p>
                )}
        </div>
    )
}

export default MakePost;