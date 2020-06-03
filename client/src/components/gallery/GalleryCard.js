/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from "react";
import "../../style/gallery-card.less";

export default function GalleryCard({ image }) {
    return (
        <div className="gallery-card">
            <img className="gallery__picture" src={image} alt="card" />
        </div>
    );
}
