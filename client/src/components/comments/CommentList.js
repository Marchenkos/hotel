/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import * as $ from "jquery";
import cookie from "react-cookies";

import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import "../../style/contant-container.less";
import "../../style/comments.less";

export default function CommentList() {
    const [comments, setComments] = useState([]);
    const [specialComment, setSpecialComment] = useState(null);

    useEffect(() => {
        const url = "http://hotel/api/getAllComments.php";

        const commentRequest = {
            jwt: cookie.load("jwtToken")
        };

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: JSON.stringify(commentRequest),
            success: response => {
                if (response.message) {
                    setComments(response.result);
                } else {
                    console.log("No correct data");
                }
            }
        });
    }, [comments]);

    const onSend = useCallback(comment => {
        const url = "http://hotel/api/sendReview.php";

        console.log(comment);

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: JSON.stringify(comment),
            success: response => {
                console.log(response.message);
                setComments([]);
            }
        });
    }, [comments]);

    const setAnswer = useCallback(toUser => {
        setSpecialComment(toUser);
    }, []);


    return (
        <div className="comment-cover">
            <div className="comment-list">
                <CommentForm onSend={onSend} />
                <div className="user-comments">
                    {
                        comments.map((comment, index) => <CommentItem key={index} comment={comment} setAnswer={setAnswer} />)
                    }
                </div>

            </div>
        </div>
    );
}
