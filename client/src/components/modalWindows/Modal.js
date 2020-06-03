import React, { useEffect } from "react";

import "../../style/modal-window.less";


export default function Modal({ closeModal, message, isError }) {
    setTimeout(() => {
        closeModal(0);
    }, 2000);

    return (
        <>
            {
                !isError ? (
                    <div className="wow fadeIn modal-window modal-window__success">
                        {
                            message
                        }
                    </div>
                ) : (
                    <div className="modal-window modal-window__error">
                        {
                            message
                        }
                    </div>
                )
            }
        </>
    );
}
