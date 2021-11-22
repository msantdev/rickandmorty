import React from "react";
import PropTypes from "prop-types";
import favoriteImg from "../../assets/favorite.png";
import notFavoriteImg from "../../assets/notFavorite.png";

import "./CharacterCard.css";

function CharacterCard({
  image,
  name,
  species,
  id,
  isFavorite,
  handleSetFavorite,
}) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          className="image-character"
          src={image}
          alt={name}
          data-testid="image"
        />
      </div>
      <div className="card-content">
        <div className="name">{name}</div>
        <div className="species">{species}</div>
        <div className="favorite">
          <img
            src={isFavorite ? favoriteImg : notFavoriteImg}
            alt="favorite"
            data-testid
            onClick={() => handleSetFavorite(id, name)}
          />
        </div>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  handleSetFavorite: PropTypes.func,
};

export default CharacterCard;
