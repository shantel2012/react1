import React from "react";
import Card from "./Components/Card";   
import ParadiseImg from "./assets/Paradise.jpg"; 
import MountainImg from "./assets/Mountain.jpg"; 
import SafariImg from "./assets/Safari.jpg"; 
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Travel Destinations</h1>
      
      <Card
        title="Paradise Beach"
        location="Hawaii"
        imageUrl={ParadiseImg}
        startDate="June 1, 2025"
        endDate="June 10, 2025"
        description="Enjoy the beautiful beaches and stunning sunsets of Hawaii."
        googleMapsUrl="https://maps.google.com/?q=Hawaii"
      />
        
      <Card
        title="Safari Adventure"
        location="Kenya"
        imageUrl={SafariImg}
        startDate="July 15, 2025"
        endDate="July 25, 2025"
        description="Experience wildlife up close in the beautiful national parks of Kenya."
        googleMapsUrl="https://maps.google.com/?q=Kenya"
      />
        
      <Card
      title="Mountain Escape."
      location="Switzerland"
      imageUrl={MountainImg}
      startDate="July 5, 2025"
      endDate="July 15, 2025"
      description="Breathe the fresh mountain air and explore the beautiful Swiss Alps in Zermatt."
      googleMapsUrl="https://maps.google.com/?q=Zermatt,Switzerland"
/>

<Card
      title="Mountain Escape."
      location="Switzerland"
      imageUrl={MountainImg}
      startDate="July 5, 2025"
      endDate="July 15, 2025"
      description="Breathe the fresh mountain air and explore the beautiful Swiss Alps in Zermatt."
      googleMapsUrl="https://maps.google.com/?q=Zermatt,Switzerland"
/>
      
    </div>
  );
}

export default App;
