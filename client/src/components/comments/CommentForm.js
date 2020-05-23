import React, { useRef, useCallback } from "react";
import * as moment from "moment";
import cookie from "react-cookies";

import { Input } from "../../style/custom-components/Input";
import { Button } from "../../style/custom-components/Buttons";

import "../../style/contant-container.less";

export default function CommentForm({ onSend }) {
    const contentRef = useRef(null);
    const today = moment();

    const sendComment = useCallback(() => {
        const comment = {
            jwt: cookie.load("jwtToken"),
            date: today.format("YYYY-MM-DD").toString(),
            description: contentRef.current.value,
            to_user: ""
        };

        onSend(comment);
    });

    return (
        <div className="comment">
            <div className="comment-title">
                send us your feedback
            </div>
            <Input placeholder="comment" ref={contentRef} comment />
            <div className="comment__footer">
                <div className="footer__date">
                    {today.format("DD-MM-YYYY")}
                </div>
                <Button onClick={sendComment} comment>Send</Button>
            </div>
        </div>
    );
}
