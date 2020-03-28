import React from 'react';
import ProjectCard from '../Components/ProjectCard';

function Home()
{
	return(
		<div>
			<div className="heading-container">
				<div className="heading-content">
					<h1>Welcome</h1>
					<p>My Name is Joaquin Ramirez<span style={{color: 'red'}}>...</span></p>
				<h4 className="my-email">JoaquinRamirezT04@gmail.com</h4>
				</div>

			</div>

			<div className="home-container">
				<div className="home-content">
					<h2>And I am a...</h2>

					<div className="about-me row">
						<ProjectCard 
							name= "Graduate Game Dev."
							desc="C++ | C# | Unreal Engine IV | Unity"
							imageURL={require('../contents/LSC.png')}
						/>
						
						<div className="about-me-img col-lg-4 col col-md-6 ">
							<img className="avatar " alt="Me" src={require('../contents/me.jpg')} />
						</div>

						<ProjectCard 
							name="Self-Taught Web Dev."
							desc="Node.js | Express.js | MongoDB | React.js"
							imageURL={require('../contents/FSW.jpg')}
						/>
					</div>

					
					<a href="/CPlusPlus" className="gratitude col-lg-12 btn btn-danger btn-lg" >See My Portfolio!</a>
						
					
				</div>
			</div>

		</div>
	)
}

export default Home;