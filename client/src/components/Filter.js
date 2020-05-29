import React, { useRef, useState, useCallback } from "react";
import styled from "styled-components";

import { FormButton } from "../style/custom-components/Buttons";
import { Input } from "../style/custom-components/Input";
import { CheckBox } from "../style/custom-components/CheckBox";
import { constants } from "../constants";
import "../style/filter.less";
import "../style/css/style.css";

const FilterContainer = styled.div`
    position: fixed;
    top: 54px;
    background: white;
    width: 0px;
    width: 0px;
    opacity: 0.9;
    padding: 20px;
    height: 100%;

    ${({ isShow }) => isShow && `
        width: 250px;

        @media (max-width: 700px) {
            width: 100%;
        }
    `}
`;

const FilterLabel = styled.div`
    color: gray;
    font-size: 17px;
    font-family: Century Gothic;
    text-transform: uppercase;
    margin: 0 10px;
`;

export default function Filter({ isShow, applyFilter, hideFilter, resetFilter }) {
    const classicRoom = useRef(null);
    const comfortRoom = useRef(null);
    const prestigeRoom = useRef(null);
    const [minCost, setminCost] = useState(0);
    const [maxCost, setmaxCost] = useState(0);

    const [isError, setIsError] = useState(false);

    const changeCostRange = useCallback(e => {
        const action = e.target.className;
        const {
            increaseMax,
            increaseMin,
            decreaseMin,
            decreaseMax
        } = constants.FILTER;

        switch (action) {
        case increaseMin: {
            if (minCost < 1000) {
                setminCost(prevCount => prevCount + 25);
            }

            break;
        }
        case increaseMax: {
            if (minCost < 4000) {
                setmaxCost(prevCount => prevCount + 25);
            }

            break;
        }
        case decreaseMin: {
            if (minCost > 0) {
                setminCost(prevCount => prevCount - 25);
            }

            break;
        }
        case decreaseMax: {
            if (maxCost > 0) {
                setmaxCost(prevCount => prevCount - 25);
            }

            break;
        }
        default: break;
        }
    }, [minCost, maxCost]);

    const sentFilterConditions = useCallback(e => {
        e.preventDefault();
        const classicCheck = classicRoom.current.checked;
        const comfortCheck = comfortRoom.current.checked;
        const prestigeCheck = prestigeRoom.current.checked;

        if (minCost === 0 && maxCost === 0 && !classicCheck && !comfortCheck && !prestigeCheck) {
            applyFilter(null);

            return;
        }

        if (minCost < maxCost || minCost === 0 || maxCost === 0 || maxCost === minCost) {
            applyFilter({
                minCost: minCost === 0 ? null : minCost,
                maxCost: maxCost === 0 ? null : maxCost,
                classic: classicRoom.current.checked,
                comform: comfortRoom.current.checked,
                prestige: prestigeRoom.current.checked,
            });
        } else {
            setIsError(true);
        }
    }, [maxCost, minCost]);

    return (
        <FilterContainer isShow={isShow}>
            <form className="filter-form">
                <FormButton className="form__close-filter-button" onClick={hideFilter}>close</FormButton>
                <FilterLabel>Min cost</FilterLabel>
                <Input className="form__input" disabled="disabled" name="minCostRange" value={minCost} placeholder="Min cost" error={isError} black />
                <div className="filter-button-block">
                    <p className={constants.FILTER.decreaseMin} onClick={changeCostRange}>-</p>
                    <p className={constants.FILTER.increaseMin} onClick={changeCostRange}>+</p>
                </div>
                <FilterLabel>Max cost</FilterLabel>
                <Input className="form__input" type="number" name="maxCostRange" value={maxCost} onChange={changeCostRange} placeholder="Max cost" error={isError} black />
                <div className="filter-button-block">
                    <p className={constants.FILTER.decreaseMax} onClick={changeCostRange}>-</p>
                    <p className={constants.FILTER.increaseMax} onClick={changeCostRange}>+</p>
                </div>
                <div>
                    <CheckBox className="form__input" type="checkbox" name="classic-room" ref={classicRoom} />
                    <span className="filter__checkbox-label">Classic</span>
                </div>
                <div>
                    <CheckBox className="form__input" type="checkbox" name="comfort-room" ref={comfortRoom} />
                    <span className="filter__checkbox-label">Comfort</span>
                </div>
                <div>
                    <CheckBox className="form__input" type="checkbox" name="prestige-room" ref={prestigeRoom} />
                    <span className="filter__checkbox-label">prestige</span>
                </div>

                <div className="filter__button-container">
                    <FormButton type="submit" onClick={sentFilterConditions} black>apply</FormButton>
                    <FormButton onClick={resetFilter}>reset</FormButton>
                </div>
            </form>
        </FilterContainer>
    );
}
