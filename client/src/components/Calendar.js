import React, { useState, useCallback } from "react";

import "../style/booking-container.less";
import "../style/calendar.less";

import CalendarSlide from "./CalendarSlide";
import { Button } from "../style/custom-components/Buttons";

export default function Calendar({ onBookRooms }) {
    const [month, setMonth] = useState(3);
    const bookedDays = [
        "2020-03-10",
        "2020-04-03",
        "2020-03-20",
        "2020-03-21"
    ];

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
            <Button onClick={prevMonth} calendar>prev</Button>
            <CalendarSlide bookedDays={bookedDays} onBookRooms={onBookRooms} month={month} />
            <Button onClick={nextMonth} calendar>next</Button>
        </div>
    );
}
