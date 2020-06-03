import React from "react";
import { Button } from "../../style/custom-components/Buttons";

import "../../style/contant-container.less";
import "../../style/comments/comment-item.less";

export default function CommentItem({ comment }) {
    return (
        <>
            <img src="public/img/slider/quote.png" alt="quote" className="comment-quote comment-quote--left" />
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
                    {comment.message}
                </div>
            </div>
            <img src="public/img/slider/quoteRight.png" alt="quote" className="comment-quote comment-quote--right" />
        </>
    );
}
