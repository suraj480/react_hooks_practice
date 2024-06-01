import React, { useRef } from 'react'
//Purpose: To persist a mutable value that does not cause a re-render when updated.
export const UseRefPractice = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus the input</button>

        </div>
    )
}
