import React from "react";
import ImageKatie from "../images/katie-zaferes.png";
import ImageStar from "../images/star.png";

export default function Card() {
    return (
        <div className="card">
            <img src={ImageKatie} alt="Image Person 1" className="card--image" />
            <div className="card--stats">
                <img src={ImageStar} alt="star icon" className="card--star"/>
                <span >5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}