import React from "react";

import "../style/menu-container.less";

export default function Menu({ content }) {
    const contentList = content.map((item, index) => <li key={index} className="menu__item">{item}</li>);

    return (
        <div className="menu-container">
            <ul className="menu">
                {
                    contentList
                }
            </ul>

        </div>
    );
}
