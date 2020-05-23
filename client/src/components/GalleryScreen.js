import React from "react";
import GalleryCard from "./gallery/GalleryCard";
import room2 from "../img/room2.jpg";
import "../style/gallery.less";

export default function GalleryScreen() {
    const gallery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => <GalleryCard title="lalalalalala" image={room2} />);

    return (
        <div className="gallery">
            {gallery}
        </div>
    );
}
