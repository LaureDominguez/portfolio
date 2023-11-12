import contactData from '@/app/public/contact.json';
import skillsData from '@/app/public/skills.json';
import Link from 'next/link';

const About = () => {
	return (
		<main>
			<div className="aboutContainer">
				<h1 className="aboutTitle">à propos de moi :</h1>
				<div className="about">
					<article>
						<p>
							Hello ! Je m&apos;appelle{' '}
							<span className="bold">
								{contactData.firstName} {contactData.lastName}
							</span>
							, je suis <span className="bold">{contactData.job}</span> depuis
							peu.
							<br />
							J&apos;ai <span className="bold">{contactData.age}</span>, un
							niveau d&apos;
							<span className="bold">{skillsData.divers.language}</span>, le{' '}
							<span className="bold">{skillsData.divers.licence}</span>, et une{' '}
							<span className="bold">{skillsData.divers.RQTH}</span>.
						</p>
					</article>
					<article className="skills">
						<div>
							<h4>Langages</h4>
							<p>
								J&apos;ai une bonne maîtrise des languages
								{skillsData.langages.map((skill, index, array) => (
									<span
										key={index}
										className="bold"
									>
										{index === array.length - 1
											? ` et ${skill},`
											: ` ${skill},`}{' '}
									</span>
								))}
								et j&apos;ai des notions dans les languages
								{skillsData.langages2.map((skill, index, array) => (
									<span
										key={index}
										className="bold"
									>
										{index === array.length - 1
											? ` et ${skill}.`
											: ` ${skill},`}{' '}
									</span>
								))}
								<br />
								Comme j&apos;aime apprendre de{' '}
								<span className="bold">nouveaux langages et concepts</span>, je
								suis tout à fait prête à me former selon les besoins de
								l&apos;équipe.
								<br />
								Je suis d&apos;ailleurs elligible aux formations suivantes en{' '}
								<span className="bold">contrat d&apos;apprentissage</span>{' '}
								(grâce à ma RQTH), disponibles chez{' '}
								<Link
									href={'https://openclassrooms.com/fr'}
									target="_blank"
									rel="noopener noreferrer"
									className="bold glowing"
								>
									OpenClassrooms
								</Link>{' '}
								:
							</p>
							<ul>
								<li>
									<Link
										href={
											'https://openclassrooms.com/fr/paths/883-developpeur-dapplication-java'
										}
										target="_blank"
										rel="noopener noreferrer"
										className="bold glowing"
									>
										Développeur d&apos;application Java
									</Link>
								</li>
								<li>
									<Link
										href={
											'https://openclassrooms.com/fr/paths/879-developpeur-dapplication-python'
										}
										target="_blank"
										rel="noopener noreferrer"
										className="bold glowing"
									>
										Développeur d&apos;application Python
									</Link>
								</li>
								<li>
									<Link
										href={
											'https://openclassrooms.com/fr/paths/527-developpeur-dapplication-android'
										}
										target="_blank"
										rel="noopener noreferrer"
										className="bold glowing"
									>
										Développeur d&apos;application - Android
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4>Frameworks</h4>
							<p>
								J&apos;ai appris à travailler avec les environnements
								{skillsData.frameworks.map((skill, index, array) => (
									<span
										key={index}
										className="bold"
									>
										{index === array.length - 1
											? ` et ${skill}.`
											: ` ${skill},`}{' '}
									</span>
								))}
							</p>
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
								J&apos;aime
								{skillsData.hobies.map((skill, index, array) => (
									<span
										key={index}
										className="bold"
									>
										{index === array.length - 1
											? ` et ${skill}.`
											: ` ${skill},`}{' '}
									</span>
								))}
							</p>
						</div>
					</article>
				</div>
			</div>
		</main>
	);
};

export default About;
