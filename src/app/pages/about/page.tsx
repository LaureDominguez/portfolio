import contactData from '@/app/public/contact.json';
import skillsData from '@/app/public/skills.json';

const About = () => {
	return (
		<div>
			<h1>Bienvenue sur la page About</h1>
			<article className="about">
				<h2>
					{contactData.firstName} {contactData.lastName}
				</h2>
				<h3>{contactData.job}</h3>
				<table>
					<td>{contactData.age}</td>
					<td>{skillsData.divers.language}</td>
					<td>{skillsData.divers.licence}</td>
					<td>{skillsData.divers.RQTH}</td>
				</table>
			</article>
			<article className="skills">
				<div>
					<h4>Langages</h4>
					<ul>
						{skillsData.langages.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
				<div>
					<h4>Frameworks</h4>
					<ul>
						{skillsData.frameworks.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
				<div>
					<h4>Soft Skills</h4>
					<ul>
						{skillsData.softSkills.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
			</article>
		</div>
	);
};

export default About;
