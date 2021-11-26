import React from "react";

const Popup = (props) => {
    return(props.trigger) ? (
        <h1 style={{
            position: "relative",
        }}>Approved!!!</h1>
    ) : "";
}


export default Popup;