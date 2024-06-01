import React, { useState, useMemo } from 'react'
// Purpose: To return a memoized value, useful for expensive calculations that should only be re-computed when dependencies change.
const UseMemoPractice = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)


    // const memoizeMultiply = useMemo(function multiCount() {
    //     console.warn("i am also called")
    //     return count * 5
    // }, [count])
    const multiCount = () => {
        console.warn("i am also called")
        return count * 5
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <h1>Item : {item}</h1>
            <br />
            {/* <h1>Multiply : {memoizeMultiply}</h1> */}
            <h1>Multiply : {multiCount()}</h1>
            <button onClick={() => setCount(count + 1)}>Update count</button>

            <button onClick={() => setItem(item * 10)}>Update item</button>


        </div>
    )
}

export default UseMemoPractice;