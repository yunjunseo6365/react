import React from "react";

function Card({card}) {

    const ratingStar = (rating) => {
        const maxStars = 5;
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(maxStars - rating);
        return filledStars + emptyStars;
    };

    return (
        <div className="travel-card">
            <img src={card.img} alt={card.etitle} />
            <div id = "card-text">
             <h2>{card.title}</h2>
             <p id="rating-stars">{ratingStar(card.rating)} ({card.rating}/5)</p>
             <p>{card.text}</p>
            </div>
        </div>
    );
}

export default Card;