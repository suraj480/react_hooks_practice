import React, { useState, useCallback } from 'react'
import UseCallbackPracticeRender from './UseCallbackPracticeRender';

const UseCallbackPractice = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    return (
        <div>

            <UseCallbackPracticeRender increment={increment} count={count} />

        </div>
    )
}

export default UseCallbackPractice;