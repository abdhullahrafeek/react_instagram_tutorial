const Sidebar = () => {
    return (
        <div className="m-3">
            <div className="d-flex flex-column gap-2">
                <img className="logo-text" src="src\assets\Hello-PNG-Image.png" alt="" />
                <div><i class="bi bi-house-door"></i>Home</div>
                <div><i class="bi bi-search"></i>Search</div>
                <div><i class="bi bi-compass"></i>Explore</div>
                <div><i class="bi bi-camera-reels"></i>Reels</div>
                <div><i class="bi bi-chat"></i>Messages</div>
                <div><i class="bi bi-bell"></i>Notifications</div>
                <div><i class="bi bi-plus-square"></i>Create</div>
                <div><i class="bi bi-plus-square"></i>Profile</div>
            </div>
            <div className="position-fixed bottom-0 d-flex flex-column gap-2 mb-3">
                <div><i class="bi bi-threads"></i>Threads</div>
                <div><i class="bi bi-three-dots"></i>More</div>
            </div>
        </div>
    )
}

export default Sidebar