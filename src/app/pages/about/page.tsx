import contactData from '@/app/public/contact.json';
import skillsData from '@/app/public/skills.json';

const About = () => {
	return (
		<main>
			<h1>à propos de moi :</h1>
			<article className="about">
				<p>
					Je m'appelle{' '}
					<span className="bold">
						{contactData.firstName} {contactData.lastName}
					</span>
					, je suis <span className="bold">{contactData.job}</span>, j'ai{' '}
					<span className="bold">{contactData.age}</span>, un niveau d'
					<span className="bold">{skillsData.divers.language}</span>, le{' '}
					<span className="bold">{skillsData.divers.licence}</span>, et une{' '}
					<span className="bold">{skillsData.divers.RQTH}</span>.
				</p>
			</article>
			<article className="skills">
				<div>
					<h4>Langages</h4>
					<p>
						J'ai une bonne maîtrise des languages
						{skillsData.langages.map((skill, index, array) => (
							<span
								key={index}
								className="bold"
							>
								{index === array.length - 1 ? ` et ${skill},` : ` ${skill},`}{' '}
							</span>
						))}
						et j'ai des notions dans les languages
						{skillsData.langages2.map((skill, index, array) => (
							<span
								key={index}
								className="bold"
							>
								{index === array.length - 1 ? ` et ${skill}.` : ` ${skill},`}{' '}
							</span>
						))}
					</p>
					{/* <ul>
						{skillsData.langages.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul> */}
				</div>
				<div>
					<h4>Frameworks</h4>
					<p>
						J'ai appris à travailler avec les environnements
						{skillsData.frameworks.map((skill, index, array) => (
							<span
								key={index}
								className="bold"
							>
								{index === array.length - 1 ? ` et ${skill}.` : ` ${skill},`}{' '}
							</span>
						))}
					</p>
					{/* <ul>
						{skillsData.frameworks.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul> */}
				</div>
				<div>
					<h4>Soft Skills</h4>
					<p>
						On dit de moi que je suis
						{skillsData.softSkills.map((skill, index, array) => (
							<span
								key={index}
								className="bold"
							>
								{index === array.length - 1
									? ` et que j'ai l'${skill}.`
									: ` ${skill},`}{' '}
							</span>
						))}
					</p>
				</div>
				<div>
					<h4>Hobies</h4>
					<p>
						J'aime
						{skillsData.hobies.map((skill, index, array) => (
							<span
								key={index}
								className="bold"
							>
								{index === array.length - 1 ? ` et ${skill}.` : ` ${skill},`}{' '}
							</span>
						))}
					</p>
				</div>
			</article>
		</main>
	);
};

export default About;
