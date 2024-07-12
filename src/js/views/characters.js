import React, { useState, useEffect } from "react";
import "../../styles/characters.css";

export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [characterId, setCharacterId] = useState(null);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/")
            .then((resp) => resp.json())
            .then((data) => setCharacters(data.results))
            .catch((error) => console.error(error));
    }, []);

    const fetchCharacterDetails = (url, id) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setSelectedCharacter(data.result.properties);
                setCharacterId(id);
            })
            .catch((error) => console.error('There was a problem with your fetch operation:', error));
    };

    return (
        <div className="container my-6">
            {selectedCharacter ? (
                <div>
                    <div className="card m-2 card-custom bg-dark">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
                            className="card-img-top custom-img-size"
                            alt={selectedCharacter.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title color-white">{selectedCharacter.name}</h5>
                            <p className="card-text no-margin"><i className="bi bi-caret-right"></i> Height: {selectedCharacter.height}</p>
                            <p className="card-text no-margin"><i className="bi bi-caret-right"></i> Mass: {selectedCharacter.mass}</p>
                            <p className="card-text no-margin"><i className="bi bi-caret-right"></i> Hair Color: {selectedCharacter.hair_color}</p>
                            <p className="card-text no-margin"><i className="bi bi-caret-right"></i> Skin Color: {selectedCharacter.skin_color}</p>
                            <p className="card-text no-margin"><i className="bi bi-caret-right"></i> Eye Color: {selectedCharacter.eye_color}</p>
                            <p className="card-text no-margin"><i className="bi bi-caret-right"></i> Birth Year: {selectedCharacter.birth_year}</p>
                            <p className="card-text no-margin"><i className="bi bi-caret-right"></i> Gender: {selectedCharacter.gender}</p>
                        </div>
                    </div>
                    <button className="btn btn-warning mb-3" onClick={() => setSelectedCharacter(null)}>
                        Back to Characters
                    </button>
                </div>
            ) : (
                <div className="card-container">
                    {characters.map((character, index) => (
                        <div className="card m-2 card-custom bg-dark" key={index}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                                className="card-img-top custom-img-size"
                                alt={character.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title color-white">{character.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => fetchCharacterDetails(character.url, index + 1)}
                                    >
                                        Detail
                                    </button>
                                    <button type="button" className="btn btn-warning">
                                        <i className="bi bi-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
