import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
const PostList = ({ comments, onFilterChange, onPostClick }) => {
    const [search, setSearch] = useState('')
    const buttonMap = comments.map((comment, index) => {
        return (
            <button
                className={`border-red-400 border`}
                key={index}
                onClick={() => onPostClick(comment.postId)}
            >
                <div className="flex flex-col ">
                    <span>
                        <b>Post Id:</b> {comment.postId}
                    </span>
                    <span>
                        <b>Comment:</b> {comment.body}
                    </span>
                </div>
            </button>
        )
    })
    useEffect(() => {
        onFilterChange(search)
    },[search])

    const handleChange = (evt) => {
        evt.preventDefault()
        const value = evt.target.value
        setSearch(value);

    }

    return (
        <>
            {/*    <!-- Component: Rounded input with helper text --> */}
            <div className="flex flex-col h-96 w-1/2">
                <div className="relative my-6 w-full">
                    <label htmlFor={"id-b03"}>Filter Components</label>
                    <input
                        id="id-b03"
                        type="text"
                        name="id-b03"
                        placeholder="filter comments"
                        value={search}
                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        onChange={handleChange}
                    />
                  
                     
                </div>
                {/* // overflow:auto makes the container with fixed */}
                <div className="overflow-auto ">{buttonMap}</div>
            </div>

            {/*    <!-- End Rounded input with helper text --> */}
        </>
    )
}

export default PostList

PostList.propTypes = {
    comments: PropTypes.array,
    onFilterChange: PropTypes.func,
    onPostClick: PropTypes.func,
}
