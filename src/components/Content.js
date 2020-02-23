import React from "react";

import firstBg from "../img/first.jpg";
import "../style/contant-container.less";

export default function Content() {
    return (
        <div className="contant-container">
            <div className="contant-container__item contant-container__item--first">
                <img src={firstBg} alt="bg" className="item__first-bg" />
            </div>
            <div className="contant-container__item contant-container__item--second">
                <div className="item__content">
                    Hotel Explora Patagonia is centrally located right on the lake
                    Pahoe in the park Torres del Paine, in the heart of Patagonia.
                    Nothing obscures
                    and the view offers a breathtaking view of the mountain ranges.
                    Here you can take a horse for a walk in the surrounding area.
                </div>
                <img src={firstBg} alt="bg" className="item__first-bg" />
            </div>
        </div>
    );
}
