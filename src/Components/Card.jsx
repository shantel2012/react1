import React from 'react';
import ParadiseImg from '../assets/Paradise.jpg';
import "./App.css";

function Card(props) {
  return (
    <div className="travel-card">
      <img src={props.imageUrl} className="travel-card--image" alt={props.title} />
      <div className="travel-card--content">
        <h2 className="travel-card--title">{props.title}</h2>
        <p className="travel-card--location">📍 {props.location}</p>
        <p className="travel-card--dates">{props.startDate} - {props.endDate}</p>
        <p className="travel-card--description">{props.description}</p>
        <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
      </div>
    </div>
  );
}

export default Card;
