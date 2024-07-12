import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sw.png"
import "../../styles/index.css";

export const Navbar = ({ favoritos, borrar }) => {
	return (
		<>
			<nav className="navbar navbar-light mb-3 px-4 justify-content-between">
				<div className="d-flex align-items-center">
					<a href="https://www.facebook.com/StarWars" className="text-white me-2 fs-4" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="https://www.twitter.com/starwars" className="text-white me-2 fs-4" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="https://www.instagram.com/starwars" className="text-white me-2 fs-4" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="https://www.youtube.com/user/starwars" className="text-white me-2 fs-4" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-youtube"></i>
					</a>
				</div>

				<Link to="/">
					<img src={logo} className="rounded mx-auto d-block" alt="Star Wars logo" width={180} height={80} />
				</Link>

				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-dark">Favorites</button>
					</Link>
				</div>
			</nav>


			<ul class="nav mb-3 px-3 justify-content-center bg-dark">
				<li class="nav-item">
					<Link class="nav-link active yellow-link" to="/character">Characters</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link yellow-link" to="/vehicles">Vehicles</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link yellow-link" to="/planets">Planets</Link>
				</li>
			</ul>

		</>
	);
};
