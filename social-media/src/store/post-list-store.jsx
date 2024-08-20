import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});

const postListReducer = (currPostList , action) =>{
    return currPostList;
}

const PostListProvider = ({children}) => {

    const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost = () => {

    };
    const deletePost = () => {

    };

    return <PostList.Provider value={{postList, addPost, deletePost}}>{children}</PostList.Provider>
};

const DEFAULT_POST_LIST = [
    {
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi friends, I am going to Mumbai for my vacations. Hope to enjoy a lot.Peace Out.',
    reactions: '2',
    userId: 'user-9',
    tags: ["vactions", "Mumbai", "Enjoying"],
    },
    {
    id: '2',
    title: 'Pass hogya Bhai',
    body: '4 saal ki masti ke baad bhi ho gaye Pass.Hard to Believe.',
    reactions: '15',
    userId: 'user-12',
    tags: ["Graduating", "Unbelievable"],
    },
];

export default PostListProvider;