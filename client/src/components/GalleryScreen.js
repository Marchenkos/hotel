import React from "react";
import GalleryCard from "./gallery/GalleryCard";
import img1 from "../img/gallery/gallery1.png";
import img2 from "../img/gallery/gallery2.png";
import img3 from "../img/gallery/gallery3.png";
import img4 from "../img/gallery/gallery4.png";
import img5 from "../img/gallery/gallery5.png";
import img6 from "../img/gallery/gallery6.png";
import img7 from "../img/gallery/gallery7.png";
import img8 from "../img/gallery/gallery8.png";
import img9 from "../img/gallery/gallery9.png";
import img10 from "../img/gallery/gallery10.png";
import img11 from "../img/gallery/gallery11.png";
import img12 from "../img/gallery/gallery12.png";
import { TitleText } from "../style/conponent-style/textBlocks";

import "../style/gallery.less";

export default function GalleryScreen() {
    const imgArray = [
        img1,
        img2,
        img3,
        img4,
        img12,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img5,
    ];
    const gallery = imgArray.map((value, index) => <GalleryCard key={index} title="lalalalalala" image={value} />);

    return (
        <>
            <div className="gallery-container">
                <TitleText className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.5s" white>
                    Gallery
                </TitleText>
                <div className="gallery">
                    {gallery}
                </div>
            </div>
            <div className="gallery-text-block">
                Morbi dui neque, varius eget quam vitae, fermentum lacinia quam. Nulla facilisi.
                Quisque mauris lacus, imperdiet non bibendum finibus, interdum pretium velit.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Praesent vel luctus velit, sit amet dignissim ex.
                Morbi bibendum metus vel mauris imperdiet, eu rutrum diam tempor.Quisque eget erat sapien.
            </div>
        </>
    );
}
