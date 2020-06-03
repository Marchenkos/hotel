import React from "react";
import { Link } from "react-router-dom";

import "../style/menu-container.less";

export default function NotFoundPage() {
    const contentList = content.map((item, index) => (
        <li key={index}>
            <Link to={`/${item}`} className="menu__item">
                {item}
            </Link>
        </li>
    ));

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
