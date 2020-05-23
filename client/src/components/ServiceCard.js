import React from "react";
import "../style/service-card.less";

export default function ServiceCard(props) {
    return (
        <div className="service-card">
            {props.img ? <img className="service-card__img" src={props.img} alt="card" /> : null}
            <div className="service-card__text-block">
                <div className="card__title">
                    {props.title}
                </div>
                <div className="card__description">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
