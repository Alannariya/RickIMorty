import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterCard.scss';

const CharacterCard = ({ character }) => {
  const [showModal, setShowModal] = useState(false);
  const [firstEpisodeName, setFirstEpisodeName] = useState('');

  const handleCardClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchFirstEpisodeName = async () => {
      if (character.episode && character.episode.length > 0) {
        try {
          const response = await axios.get(character.episode[0]);
          setFirstEpisodeName(response.data.name);
        } catch (error) {
          console.error('Error fetching first episode name:', error);
        }
      }
    };

    fetchFirstEpisodeName();
  }, [character.episode]);

  return (
    <div className="character-card" onClick={handleCardClick} key={character.id}> 
      <img src={character.image} alt={`Avatar of ${character.name}`} />
      <h2>{character.name}</h2>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{character.name}</h2>
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
            <p>Race: {character.species}</p>
            <p>Type: {character.type || 'Unknown'}</p>
            <p>First Appearance: {firstEpisodeName || 'Unknown'}</p> 
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;