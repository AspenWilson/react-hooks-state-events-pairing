import React, {useState} from "react";
import Comments from "./Comments";

function Button (props){

    const [hideComments, setHideComments] = useState(false)

    function handleBtn() {
        setHideComments(!hideComments)
    }

    return (
        <>
        <button id="comment-btn" onClick={handleBtn} > {hideComments ? 'Show Comments' : 'Hide Comments'}</button>
        <hr></hr>
        {hideComments === false ? <Comments />: null}
        </>
    )
}

export default Button