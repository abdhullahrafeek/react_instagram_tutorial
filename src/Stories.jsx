import { useEffect, useState } from "react"

const Stories = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/stories").
        then((data) => data.json()).
        then((data) => setStories(data)).
        catch((err) => console.log(err));
        }, [])

    return (
        stories.length != 0
        ? <div className="story d-flex">
            {stories.map((story) => (
                <div className="mx-1" key={story.id}>
                    <div className="gradient-border">
                        <img className="story-dp rounded-circle" src={story.user.profile_pic} alt="Profile Picture" />
                    </div>
                    <p className="text-truncate" style={{width: "50px"}}>{story.user.user_name}</p>
                </div>
            ))}
        </div>
        : <div>Stories loading</div>
    )
}

export default Stories