import React from 'react'

const ThemeContext = React.createContext({

    addnumber: (event, key) => { },
    decnumber: (event, key) => { },
    popup: () => { },
    handleClose: () => { },
    stop: () => { },
    food: null
});

export default ThemeContext