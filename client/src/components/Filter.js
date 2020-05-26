import React, { useState, useEffect, useRef } from "react";

import { FormButton } from "../style/custom-components/Buttons";
import { Input } from "../style/custom-components/Input";
import { Form } from "../style/custom-components/Form";
import { constants } from "../constants";

import "../style/filter.less";
import "../style/css/style.css";

export default function Filter({ isShow, applyFilter }) {
    const costRef = useRef(null);
    const roomStatus = useRef(null);
    const [modalClass, setModalClass] = useState(constants.HIDE_MODAL);
    const [modalOverlayClass, setModalOverlayClass] = useState(constants.HIDE_MODAL_OVERLAY);

    useEffect(() => {
        if (isShow) {
            setModalClass(constants.ACTIVE_MODAL);
            setModalOverlayClass(constants.ACTIVE_MODAL_OVERLAY);
        } else {
            setModalClass(constants.HIDE_MODAL);
            setModalOverlayClass(constants.HIDE_MODAL_OVERLAY);
        }
    }, [isShow]);

    const sentFilterConditions = e => {
        e.preventDefault();

        applyFilter([costRef.current.value, roomStatus.current.value]);
    };

    return (
        <div className={modalOverlayClass}>
            <div className={modalClass}>
                <div className="filter">
                    <Form>
                        <Input className="form__input" type="number" placeholder="Cost" name="cost" ref={costRef} />
                        <Input className="form__input" type="text" name="room-status" placeholder="Room status" ref={roomStatus} />

                        <FormButton type="submit" onClick={sentFilterConditions} inForm>apply</FormButton>
                    </Form>
                </div>
            </div>
        </div>
    );
}
