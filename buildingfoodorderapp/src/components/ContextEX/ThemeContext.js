import React from 'react'

const ThemeContext = React.createContext({

    increaseNumber: (key) => { },
    decreaseNumber: (event, key) => { },
    popup: () => { },
    stop: () => { },
    Food: '',
    visible: ''
});

export default ThemeContext