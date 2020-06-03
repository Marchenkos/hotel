import React from "react";
import "../style/service-card.less";
import { MainText, AdditionalText, TitleText } from "../style/conponent-style/textBlocks";

export default function ServiceCard(props) {
    return (
        <div className="service-card">
            {props.img ? <img className="service-card__img" src={props.img} alt="card" /> : null}
            <div className="service-card__text-block">
                <AdditionalText inContent className="card__title">
                    {props.title}
                </AdditionalText>
                <div className="card__description">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
