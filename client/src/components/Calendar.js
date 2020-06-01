import React, { useState, useCallback, useEffect } from "react";
import * as $ from "jquery";

import "../style/booking-container.less";
import "../style/calendar.less";

import CalendarSlide from "./CalendarSlide";
import leftArrow from "../img/calendar/arrowRedLeft.png";
import rightArrow from "../img/calendar/arrowRed.png";

export default function Calendar({ onBookRooms, currentRoom }) {
    const [bookedDates, setBookedDates] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3000/room/booked-date";

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            data: {
                roomId: currentRoom,
            },
            success: response => {
                if (response) {
                    response.map(item => {
                        setBookedDates(prev => [...prev, item.ckeck_in, item.ckeck_out]);
                    });
                }
            }
        });
    });

    const [month, setMonth] = useState(5);


    const prevMonth = useCallback(() => {
        if (month > 1) {
            setMonth(prev => prev - 1);
        }
    }, [month]);

    const nextMonth = useCallback(() => {
        if (month < 12) {
            setMonth(prev => prev + 1);
        }
    }, [month]);

    return (
        <div className="calendar-container">
            <div className="calendar-container__buttons-block">
                <img src={`/${leftArrow}`} className="button-block__arrow" alt="arrow" onClick={prevMonth} />
                <img src={`/${rightArrow}`} alt="arrow" className="button-block__arrow" onClick={nextMonth} />
            </div>
            <CalendarSlide bookedDays={bookedDates} onBookRooms={onBookRooms} month={month} />
        </div>
    );
}
