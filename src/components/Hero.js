import React from "react";

const Hero = (props) => {
	return (
		<li
			onClick={() => props.onSelect(props.hero)}
			className={props.hero === props.selectedHero ? "selected" : "usual"}
		>
			<div className="hero-element">
				<div className="badge">{props.hero.id}</div>
				<div className="hero-info">
					<div className="name">{props.hero.name}</div>
					<div className="saying">{props.hero.saying}</div>
				</div>
				<button
					className="delete-button"
					onClick={(e) => props.onDelete(e, props.hero)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Hero;
