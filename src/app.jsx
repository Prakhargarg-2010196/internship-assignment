// App.js
import { useState, useEffect } from 'react'
import './app.css'
import PostList from '~/components/postList.jsx'
import CommentList from '~/components/commentList.jsx'
import { fetchComments, fetchCommentsByPostId } from '~/api/fetchComments'

function App() {
    const [comments, setComments] = useState([])// stores the 100 comments 
    const [filteredComments, setFilteredComments] = useState([]) // store the result of the search query 
    const [selectedPost, setSelectedPost] = useState(null); // select the comments on the button click which get the id of the post selected 
    useEffect(() => {
        //  fetch hundred comments from the comments api
        fetchComments()
            .then((data) => {
                return data.filter((ele, index) => index < 100)
            })
            .then((data) => {
                setComments(data);
            })
            .catch((e) => console.log(e))
            setFilteredComments(comments);
    }, []);
      

    const handleFilterChange =(postId) => {
        // Filter comments based on the entered postId
        const output = comments.filter((ele) => ele.postId === Number(postId));
        setFilteredComments(output);
    }

    const handlePostClick = (postId) => {
        // Fetch and display associated comments for the selected post
        fetchCommentsByPostId(postId).then(data=>setSelectedPost(data));
    }

    return (
        <div className="app flex columns-2">
            <PostList
                defaultComments={comments}
                comments={filteredComments}
                onFilterChange={handleFilterChange}
                onPostClick={handlePostClick}
            />
            <CommentList comments={selectedPost} />
        </div>
    )
}

export default App
