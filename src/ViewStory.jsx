import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ViewStory = () => {

    const {id, tot} = useParams();

    const [story, setStory] = useState();


    useEffect(() => {
        fetch(`http://localhost:3000/stories/${id}`).
        then((data) => data.json()).
        then((data) => setStory(data)).
        catch((err) => console.log(err));
    }, [id]);

    const navigate = useNavigate();

    if(id > tot || id <= 0) {
        navigate('/');
    } 

    return (
        <div>{
            story 
            ? <div className="d-flex justify-content-center align-items-center">
                <Link to={`http://localhost:5173/stories/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle"></i></Link>
                <img className="vh-100" src={story.image} alt="Story" />
                <Link to={`http://localhost:5173/stories/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle"></i></Link>
            </div>
            : <div>Story Loading</div>
        }</div>
    );
}

export default ViewStory