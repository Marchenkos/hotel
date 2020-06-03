import React, { useRef, useCallback } from "react";
import * as moment from "moment";
import cookie from "react-cookies";
import * as $ from "jquery";

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
            comment: contentRef.current.value,
        };

        const url = "http://localhost:3000/comment/save-comment";

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                jwt: cookie.load("jwtToken").token,
                date: today.format("YYYY-MM-DD").toString(),
                message: contentRef.current.value,
            },
            success: response => {
                console.log(response.message);
                contentRef.current.value = "";
            }
        });

        onSend();
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
