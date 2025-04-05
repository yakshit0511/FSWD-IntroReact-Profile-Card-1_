import React from "react";

const ProfileCard = ({ name, bio, image }) => {
    return (
      <div className="contain">
      <div className="card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
      </div>
    );
  };
  
  export default ProfileCard;