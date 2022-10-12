import React from "react";

export default function Card(props) {
    let badgeText;
    if (props.user.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.user.location === "Online") {
        badgeText = "ONLINE";
    }

    console.log(props);

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={process.env.PUBLIC_URL + "/images/" + props.user.coverImg} alt="Image Person" className="card--image" />
            <div className="card--stats">
                <img src={process.env.PUBLIC_URL + "/images/star.png"} alt="star icon" className="card--star"/>
                <span>{props.user.stats.rating}</span>
                <span className="gray">({props.user.stats.reviewCount}) • </span>
                <span className="gray">{props.user.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.user.price}</span> / person</p>
        </div>
    )
}