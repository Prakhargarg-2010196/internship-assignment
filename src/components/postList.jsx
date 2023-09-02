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
                <div className="relative my-6">
                    <input
                        id="id-b03"
                        type="text"
                        name="id-b03"
                        placeholder="filter comments"
                        value={search}
                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="id-b03"
                        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                    >
                        Filter Comments
                    </label>
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
