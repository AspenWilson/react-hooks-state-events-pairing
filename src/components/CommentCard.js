import React from "react";

function CommentCard(props){
    
    return (
        <>
            <h3>{props.user}</h3>
            <h4>{props.comment}</h4>
        </>
    )
}

export default CommentCard