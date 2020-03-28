import React from 'react';
import ProjectCard from '../Components/ProjectCard';

function WebDevPage()
{
	return(
		<div className="project-page-section">
			<h1 className="project-page-title">Web Development</h1>
			
			<div className="page-projects">
				<div className="row">
					<ProjectCard 
						name="Joaquin Ramirez Pool service"
						codeButtonText="Github"
						imageURL={require('../contents/logo.png')}
						siteURL="https://tavera15.github.io/JoaquinPoolCompany/"
						codeURL="https://github.com/Tavera15/JoaquinPoolCompany"
						desc="A one-page website that uses Bootstrap."
					/>

					<ProjectCard
						name="My Porfolio"
						codeButtonText="Github"
						imageURL={require('../contents/portfolio.jpg')}
						codeURL="https://github.com/Tavera04/My_Portfolio"
						desc="Code to this portfolio. Used React.JS and Bootstrap."
					/>

					<ProjectCard
						name="Pokemon App"
						codeButtonText="Github"
						imageURL={require('../contents/Pokemon_App.jpg')}						
						siteURL="https://tavera15.github.io/Pokemon_App/"
						codeURL="https://github.com/Tavera15/Pokemon_App"
						desc="A React.JS project that uses the PokeAPI (https://pokeapi.co/) to display Pokemon and their data in a second page."
					/>
				</div>
			</div>
		</div>
	)
}

export default WebDevPage;