import React from "react";

import "../../style/modal-window.less";

import { constants } from "../../constants";

export default function Modal({ closeModal, message }) {
    setTimeout(() => {
        closeModal(0);
    }, 1000);

    return (
        <>
            {
                message === 4 ? (
                    <div className="modal-window modal-window__success">
                        {
                            constants.errorMessage[message - 1]
                        }
                    </div>
                ) : (
                    <div className="modal-window modal-window__error">
                        {
                            constants.errorMessage[message - 1]
                        }
                    </div>
                )
            }
        </>
    );
}
