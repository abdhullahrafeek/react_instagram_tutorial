import { useEffect, useState } from "react"

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/posts').
        then((data) => data.json()).
        then((data) => setPosts(data)).
        catch((err) => console.log(err))
    }, []);

    return (
        <div className="d-flex justify-content-center">
        {posts.length === 0
            ? <div>Posts loading</div>
            : <div>{posts.map((post) => (
                <div className="my-3" key={post.id}>
                    <div className="d-flex">
                        <img className="dp rounded-circle" src={post.user.profile_pic} alt="Profile Pic" />
                        <h5>{post.user.user_name}</h5>
                    </div>
                    <div>
                        <img className="image" src={post.image} alt="Post Image" />
                        <div>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-share"></i>
                        </div>
                        <b>{post.likes} Likes</b>
                        <p>{post.caption}</p>
                    </div>
                </div>
            ))}</div>
        } 
        </div>
    )
}

export default Posts