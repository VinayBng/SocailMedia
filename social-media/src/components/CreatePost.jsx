import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const viewsElement = useRef();
  const tagsElement = useRef();

  const handelSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const views = viewsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    viewsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, views, tags);
  }

  return (
    <form className="create-post" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your User Id here</label>
        <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Your User Id" />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today..." />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea type="text" ref={postBodyElement} rows="4" className="form-control" id="body" placeholder="How are you feeling today..." />
      </div>

      <div className="mb-3">
        <label htmlFor="views" className="form-label">Number of views</label>
        <input type="text" ref={viewsElement} className="form-control" id="title" placeholder="How many people viewed this post" />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your tags here</label>
        <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter tags using space" />
      </div>
      
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
}

export default CreatePost;