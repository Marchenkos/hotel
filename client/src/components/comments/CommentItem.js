import React from "react";
import { Button } from "../../style/custom-components/Buttons";

import "../../style/contant-container.less";
import "../../style/comments.less";

export default function CommentItem({ comment, answer }) {
    const onAnswer = () => {
        answer(comment.id);
    };

    return (
        <div className="comment-item">
            <div className="item-header">
                <div className="header__user">
                    {comment.user_name}
                </div>
                <div className="header__date">
                    {comment.date}
                </div>
            </div>
            <div className="item-content">
                {comment.description}
            </div>
            <div className="item-footer">
                <Button onClick={onAnswer} comment>Answer</Button>
            </div>
        </div>
    );
}
