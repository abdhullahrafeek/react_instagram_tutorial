const Sidebar = () => {
    return (
        <div className="m-3 position-fixed">
            <div className="d-flex flex-column gap-2">
                <img className="logo-text" src="src\assets\Hello-PNG-Image.png" alt="" />
                <div><i className="bi bi-house-door"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-camera-reels"></i>Reels</div>
                <div><i className="bi bi-chat"></i>Messages</div>
                <div><i className="bi bi-bell"></i>Notifications</div>
                <div><i className="bi bi-plus-square"></i>Create</div>
                <div><i className="bi bi-plus-square"></i>Profile</div>
            </div>
            <div className="position-fixed bottom-0 d-flex flex-column gap-2 mb-3">
                <div><i className="bi bi-threads"></i>Threads</div>
                <div><i className="bi bi-three-dots"></i>More</div>
            </div>
        </div>
    )
}

export default Sidebar