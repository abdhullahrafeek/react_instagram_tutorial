import Posts from "./Posts"
import Stories from "./Stories"

const Feed = () => {
    return (
        <>
            <div className="story"><Stories /></div>
            <div><Posts /></div>
        </>
    )
}

export default Feed