import React from 'react';
import ProjectCard from '../Components/ProjectCard';

function CSharpPage()
{
	return(
		<div className="project-page-section">
			<h1 className="project-page-title">C#</h1>
			
			<div className="page-projects">
				<div className="row">
					<ProjectCard 
						name="Boggle Game" 
						codeButtonText="Github" 
						imageURL={require('../contents/CSharp/boggle.png')} 
						codeURL="https://github.com/Tavera15/Final-Boggle"
						desc="Final project for Game & Simulation Programming I. The code used to design the Form is the instructor's. The code to make the game functional is mine."
					/>

					<ProjectCard
						name="Invoice Generator"
						codeButtonText="Github"
						imageURL={require('../contents/CSharp/Invoice Gen.png')}
						codeURL="https://github.com/Tavera15/InvoiceGenerator"
						desc="My first C# Form project that can be used as a tool for a small business. This application can store basic customer information using a JSON file, keep track of invoice numbers, and save invoices to a folder."
					/>

					<ProjectCard
						name="Sudoku Solver"
						codeButtonText="Github"
						imageURL={require('../contents/CSharp/sudoku.png')}
						codeURL="https://github.com/Tavera15/Sudoku_Solver"
						desc="A Sudoku solver built using Visual Studio C# Forms .Net Framework. This project implements the Backtrack algorithm to solve the puzzle."
					/>

				</div>
			</div>
		</div>
	)
}


export default CSharpPage;