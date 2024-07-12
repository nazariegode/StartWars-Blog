import React, { useState, useEffect } from "react";
import "../../styles/planets.css";

export const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [planetId, setPlanetId] = useState(null);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets")
            .then((resp) => resp.json())
            .then((result) => setPlanets(result.results))
            .catch((error) => console.error(error));
    }, []);

    const fetchPlanetDetails = (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
            .then((resp) => resp.json())
            .then((result) => {
                setSelectedPlanet(result.result.properties);
                setPlanetId(id);
            })
            .catch((error) => console.error(error));
    };

    const checkImageExists = async (url) => {
        try {
            const response = await fetch(url);
            return response.ok;
        } catch {
            return false;
        }
    };

    return (
        <div className="container my-6">
            {selectedPlanet ? (
                <>
                    <div class="card mb-3 card-custom bg-dark" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={selectedPlanet.name}
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 className="card-title text-warning">{selectedPlanet.name}</h5>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Diameter: {selectedPlanet.diameter}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Climate: {selectedPlanet.climate}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Gravity: {selectedPlanet.gravity}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Terrain: {selectedPlanet.terrain}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Surface Water: {selectedPlanet.surface_water}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Population: {selectedPlanet.population}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning mb-3" onClick={() => setSelectedPlanet(null)}>
                        Back to Planets
                    </button>
                </>
            ) : (
                <div className="card-container">
                    {planets.map((planet, index) => {
                        const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`;

                        return (
                            <React.Fragment key={index}>
                                {checkImageExists(imageUrl) && (
                                    <div className="card m-2 card-custom bg-dark">
                                        <img
                                            src={imageUrl}
                                            className="card-img-top custom-img-size"
                                            alt={planet.name}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title color-white">{planet.name}</h5>
                                            <div className="d-flex justify-content-between">
                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => fetchPlanetDetails(planet.uid)}
                                                >
                                                    Detail
                                                </button>
                                                <button type="button" className="btn btn-warning">
                                                    <i className="bi bi-heart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
