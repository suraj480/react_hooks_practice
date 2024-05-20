import React, { useContext } from 'react';
//Purpose: To access the value of a context in function components.

const ThemeContext = React.createContext('dark');

const UseContextPractice = () => {
    const theme = useContext(ThemeContext);
    
    return (
        <div>
            <button className={theme}>I am styled by theme context!</button>
        </div>
    );
}

export default UseContextPractice;
