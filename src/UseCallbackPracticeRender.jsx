import React from 'react'

const UseCallbackPracticeRender = ({ increment, count }) => {
    return (
        <div>
            {console.log("count=",count)}
            <h1>{count}</h1>
            <button onClick={increment}>Increment callback</button>

        </div>
    )
}

export default UseCallbackPracticeRender;