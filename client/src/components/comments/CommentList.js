/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import * as $ from "jquery";
import cookie from "react-cookies";

import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import "../../style/contant-container.less";
import "../../style/comments.less";
import firstBg from "../../img/hotel/public-service.jpg";
import secondBg from "../../img/header/headerbg.png";
import { MainText, AdditionalText, TitleText } from "../../style/conponent-style/textBlocks";

export default function CommentList({ currentUser }) {
    const [comments, setComments] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isUserLogin, setIsUserLogin] = useState(false);

    const [maxComments, setMaxComments] = useState(0);

    const getNextComment = useCallback(() => {
        if (currentIndex < maxComments) {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex]);

    const getPrevComment = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }, [currentIndex]);

    useEffect(() => {
        const url = "http://localhost:3000/comment/all-comments";
        const user = cookie.load("jwtToken");

        if (user) {
            setIsUserLogin(true);

            $.ajax({
                type: "POST",
                url,
                dataType: "json",
                data: {
                    jwt: user.token
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
        }
    }, [currentUser]);

    const refreshComments = () => {
        const url = "http://localhost:3000/comment/all-comments";

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                jwt: cookie.load("jwtToken").token
            },
            success: response => {
                if (response) {
                    setComments(response);
                    setMaxComments(response.length);
                } else {
                    console.log("No correct data");
                }
            }
        });
    };

    const onSend = useCallback(() => {
        refreshComments();
    }, [comments]);


    return (
        <div className="comment-cover">
            {!isUserLogin ? (
                <div className="comment-message-block">
                    <div className="image-background-block comment-message-block__img-block">
                        <img src={firstBg} alt="bg" className="image-background-block__main-bg" />
                        <img src={secondBg} alt="bg" className="image-background-block__opacity-bg" />
                    </div>
                    <div className="comment-message-block__description">
                        <MainText>Login please</MainText>
                        <AdditionalText>we appreciate your opinion</AdditionalText>
                    </div>
                </div>
            ) : (
                <div className="comment-list">
                    <CommentForm onSend={onSend} />
                    <div className="user-comments">
                        <img src="public/img/slider/sliderArrow.png" alt="slider-arrow" className="user-comments__change-button--left" onClick={getPrevComment} />
                        {comments.length > 0 ? <CommentItem comment={comments[currentIndex]} /> : null}
                        <img src="public/img/slider/sliderArrowRight.png" alt="slider-arrow" className="user-comments__change-button--right" onClick={getNextComment} />
                    </div>
                </div>
            )}
        </div>
    );
}
