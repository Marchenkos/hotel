/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from "react";
import "../../style/gallery-card.less";

export default function GalleryCard({ image }) {
    const [isShowText, setShowText] = useState(false);

    const showText = useCallback(() => {
        setShowText(!isShowText);
    }, [isShowText]);

    return (
        <div className="gallery-card" onClick={showText}>
            <img className="gallery__picture" src={image} alt="card" />
            {isShowText ? (
                <img className="gallery__big-picture" src={image} alt="card" />
            ) : null}
        </div>
    );
}
