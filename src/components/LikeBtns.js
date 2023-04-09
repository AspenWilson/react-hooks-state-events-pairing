import React, { useState } from "react";

function LikeButtons ({upvotes, downvotes}) {
    const [upNumber, setUpNumber] = useState(upvotes)
    const [downNumber, setDownNumber] = useState(downvotes)

   const addToUp = () => {
    setUpNumber(upNumber + 1)
   }

   const addToDown = () => {
    setDownNumber(downNumber + 1)
   }

return (
    <>
    <button id='upvotes' onClick ={addToUp}> {upNumber} 👍 </button> 
    <button id='downvotes' onClick= {addToDown}> {downNumber} 👎 </button>
    </>
)
}

export default LikeButtons