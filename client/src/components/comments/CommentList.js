/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import * as $ from "jquery";
import cookie from "react-cookies";

import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import { MainText, AdditionalText, TitleText } from "../../style/conponent-style/textBlocks";
import "../../style/contant-container.less";
import "../../style/comments.less";

export default function CommentList({ jwt }) {
    const [comments, setComments] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [maxComments, setMaxComments] = useState(0);

    const getNextComment = useCallback(() => {
        if (currentIndex < maxComments) {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex, maxComments]);

    const getPrevComment = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }, [currentIndex, maxComments]);

    const getComments = () => {
        const url = "http://localhost:3000/comment/all-comments";
        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                jwt
            },
            success: response => {
                if (response) {
                    setComments(response);
                    setMaxComments(response.length - 1);
                } else {
                    console.log("No correct data");
                }
            }
        });
    };

    useEffect(() => {
        getComments();
    }, [jwt]);

    const onSend = useCallback(() => {
        getComments();
    }, []);


    return (
        <div className="comment-cover">
            <MainText>reviews our visitors</MainText>
            {
                comments.length > 0 ? (
                    <div className="comment-list">
                        <div className="user-comments">
                            <img src="public/img/icons/arrow.png" alt="slider-arrow" className="user-comments__change-button--left" onClick={getPrevComment} />
                            <CommentItem comment={comments[currentIndex]} />
                            <img src="public/img/icons/arrowRight.png" alt="slider-arrow" className="user-comments__change-button--right" onClick={getNextComment} />
                        </div>
                        {jwt ? <CommentForm onSend={onSend} /> : null}
                    </div>
                ) : null
            }
        </div>
    );
}
