import PropTypes from 'prop-types'
export default function CommentList({ comments }) {
    // used null collaescing operator for countering the null case 
    const commentsMap = comments?.map((ele,index) => {
        return (
            <div
                key={index}
                className="border border-green-500"
            >
                <div>Post Id : {ele.postId}</div>
                <div>Comment : {ele.body}</div>
            </div>
        )
    })
    return (
        <div className="h-96 w-1/2 overflow-auto">
            <div className="">{commentsMap}</div>
        </div>
    )
    
}
CommentList.propTypes = {
    comments: PropTypes.array,
}