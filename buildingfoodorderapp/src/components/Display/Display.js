import React, { useContext } from 'react';
import ThemeContext from '../ContextEX/ThemeContext';

import './Display.css';

export const Display = (props) => {
    const user = useContext(ThemeContext)


    const showHideClassName = props.yes ? "modal display-block" : "modal display-none";



    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button type="button" onClick={user.handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

