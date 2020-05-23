/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React, { useState, useCallback, useEffect } from "react";
import * as moment from "moment";
import { constants } from "../constants";

import "../style/calendar.less";

export default function CalendarSlide({ bookedDays, month, onBookRooms }) {
    const [allDays, setAllDays] = useState(null);
    const [callendarArray, setCallendarArray] = useState([]);
    const [formatMonth, setFormatMonth] = useState("03");

    const [choosedDay, setChoosedDay] = useState([]);

    useEffect(() => {
        if (month < 10) {
            setFormatMonth(`0${month}`);
            setAllDays(moment(`2020-0${month}`, "YYYY-MM").daysInMonth());
        } else {
            setFormatMonth(`${month}`);
            setAllDays(moment(`2020-${month}`, "YYYY-MM").daysInMonth());
        }
    }, [month, allDays, formatMonth]);

    const chooseCell = useCallback(day => {
        let formatDay = day;

        if (day < 10) {
            formatDay = `0${day}`;
        }

        const date = `2020-${formatMonth}-${formatDay}`;
        const lastChoosedDay = choosedDay[choosedDay.length - 1];

        if (choosedDay.length > 0) {
            if (moment(date).diff(moment(lastChoosedDay), "days") === (1 || -1)) {
                setChoosedDay(prevState => [...prevState, date]);
            }
        } else {
            setChoosedDay(prevState => [...prevState, date]);
        }
    }, [choosedDay, formatMonth]);

    useEffect(() => {
        onBookRooms(choosedDay);
    }, [choosedDay]);

    const unchooseCell = useCallback(day => {
        let formatDay = day;

        if (day < 10) {
            formatDay = `0${day}`;
        }

        const date = `2020-${formatMonth}-${formatDay}`;
        const lastChoosedDay = choosedDay[choosedDay.length - 1];

        if (choosedDay.length > 1) {
            if ((moment(date).diff(moment(lastChoosedDay), "days") == 0) || ((moment(date).diff(moment(lastChoosedDay), "days") == 1 - choosedDay.length))) {
                setChoosedDay(prevState => [...prevState.slice(0, prevState.indexOf(date)), ...prevState.slice(prevState.indexOf(date) + 1)]);
            }
        } else {
            setChoosedDay(prevState => [...prevState.slice(0, prevState.indexOf(date)), ...prevState.slice(prevState.indexOf(date) + 1)]);
        }
    }, [choosedDay, formatMonth]);

    useEffect(() => {
        const array = [];

        let start = 1;

        const firstDay = moment(`2020-${formatMonth}-01`).isoWeekday();

        while (start !== firstDay) {
            array.push(null);

            start++;
        }

        for (let i = 1; i <= allDays; i++) {
            let day;
            if (i < 10) {
                day = `0${i}`;
            } else {
                day = i;
            }

            array.push(`2020-${formatMonth}-${day}`);
        }

        setCallendarArray(array);
    }, [formatMonth, allDays]);

    const getSells = () => {

        const result = callendarArray.map((day, index) => {
            if (day) {
                if (choosedDay.includes(day)) {
                    return <div className="slide-cell slide-cell__choosed" key={index} onClick={() => unchooseCell(moment(day, "YYYY-MM-DD").date())}>{moment(day, "YYYY-MM-DD").date()}</div>;
                }
                if (bookedDays.includes(day)) {
                    return <div className="slide-cell slide-cell__booked" key={index}>{moment(day, "YYYY-MM-DD").date()}</div>;
                }
                return <div className="slide-cell" key={index} onClick={() => chooseCell(moment(day, "YYYY-MM-DD").date())}>{moment(day, "YYYY-MM-DD").date()}</div>;
            } else {
                return <div className="slide-cell slide-cell__blocked" key={index} />;
            }
        });

        return result;
    };

    return (
        <div className="calendar-slide-container">
            <>
                <div className="calendar-slide-container__title">
                    {
                        constants.monthName[month - 1]
                    }
                </div>
                {
                    getSells()
                }
            </>
        </div>
    );
}
