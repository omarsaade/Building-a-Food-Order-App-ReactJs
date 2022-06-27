import './Display.css';

export const Display = (props) => {
    const showHideClassName = props.yes ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">

            </section>
        </div>
    );
};

