import React from "react"
import video from "../data/video"
import CommentCard from "./CommentCard"

const commentDetails = video.comments

function Comments(video) {
    return (
        <div id='comments' >
        <h2>{commentDetails.length} Comments</h2>
        {commentDetails.map((comm) => (
            <CommentCard key={comm.id} user={comm.user} comment={comm.comment} />
        ))}
        </div>
    )
}

export default Comments