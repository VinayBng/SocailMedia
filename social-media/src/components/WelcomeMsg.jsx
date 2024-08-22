const WelcomeMsg = ({onGetPostsClick}) => {
    return <center className="welcome-message">
        <h1>There are No posts</h1>
        <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Posts from Server</button>
    </center>
}

export default WelcomeMsg;