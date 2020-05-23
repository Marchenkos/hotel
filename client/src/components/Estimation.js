/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React, { useState, useCallback, useEffect } from "react";
import * as $ from "jquery";

import emptyStar from "../img/stars/emptyStar.png";
import fillStar from "../img/stars/fillStar.png";

import "../style/stars.less";

export default function Estimation({ jwt, estimation, roomId }) {
    const [estimationCount, setEstimationCount] = useState(0);
    const [message, setMessage] = useState(null);

    const maxCount = 5;

    useEffect(() => {
        const estimationData = {
            jwt,
            room_id: roomId
        };

        $.ajax({
            type: "POST",
            url: "http://hotel/api/checkEstimation.php",
            dataType: "json",
            data: JSON.stringify(estimationData),
            success: response => {
                if (response) {
                    setEstimationCount(response);
                }

                console.log(response);
            }
        });
    }, []);

    const setEstimateCallBack = useCallback(count => {
        const url = "http://hotel/api/estimate_room.php";

        const estimationData = {
            jwt,
            room_id: roomId,
            estimation: count
        };

        console.log(roomId);

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: JSON.stringify(estimationData),
            success: response => {
                console.log("PID");
            }
        });

        setEstimationCount(count);
        setMessage("Thanks for your review!");
    }, [estimationCount]);


    const getFillStars = useCallback(() => {
        const fillStarArray = [];

        for (let i = 0; i < estimationCount; i++) {
            fillStarArray.push(<img src={`/${fillStar}`} key={i + 10} alt="fillStar" />);
        }

        return fillStarArray;
    }, [estimationCount]);

    const getEmptyStars = useCallback(() => {
        const emptyStarArray = [];

        if (estimationCount > 0) {
            for (let i = 1; i <= maxCount - estimationCount; i++) {
                emptyStarArray.push(<img
                    src={`/${emptyStar}`}
                    key={i}
                    alt="fillStar"
                />);
            }
        } else {
            for (let i = 1; i <= maxCount - estimationCount; i++) {
                emptyStarArray.push(<img
                    src={`/${emptyStar}`}
                    key={i}
                    onClick={() => {
                        setEstimateCallBack(i);
                    }}
                    alt="fillStar"
                />);
            }
        }
        return emptyStarArray;
    }, [estimationCount]);

    return (
        <>
            <div className="estimation-container">
                {
                    getFillStars()
                }
                {
                    getEmptyStars()
                }
            </div>

            {
                message ? (
                    <div className="estimation-message">
                        {message}
                    </div>
                ) : null
            }
        </>
    );
}
