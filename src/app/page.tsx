import Image from "next/image";

const Home = () => {
	return (
		<main>
			<div className="homeCountainer">
				<div className="homeTitle">
					<h1>Laure DOMINGUEZ</h1>
					<h2>Développeuse Web FullStack</h2>
				</div>
				<div className="home">
					<div>
						<h3>Bonjour et bienvenue sur mon site !</h3>
						<p>
							Je suis ravie de vous accueillir sur ma page de présentation !
						</p>
						<p>
							Je suis passionnée par les nouvelles technologies, et je suis
							<span className="bold">
								{' '}
								à la recherche d&apos;une opportunité
							</span>{' '}
							au sein d&apos;une équipe <span className="bold">dynamique</span>.
							<br />
							Vous trouverez ici un aperçu de mon
							<span className="bold"> profil</span>, de mes{' '}
							<span className="bold">compétences </span>
							et de mes <span className="bold">réallisations</span>.
						</p>
						<p>
							Mon objectif est de collaborer avec une équipe expérimentée et
							<span className="bold"> innovante</span>, pour continuer à
							développer mes compétences et contribuer à des projets{' '}
							<span className="bold"> passionnants</span>.
						</p>
						<p>
							N&apos;hésitez pas à explorer mon profil et à me{' '}
							<span className="bold">contacter</span>, si vous cherchez une
							personne <span className="bold">motivée et passionnée</span> pour
							rejoindre votre équipe !
						</p>
						<p>
							Je suis impatiente de relever de{' '}
							<span className="bold">nouveaux défis</span> avec vous !
						</p>

						<a
							href={'/CV_Laure_DOMINGUEZ_DevWeb_Fullstack.pdf'}
							download={'CV_Laure_DOMINGUEZ_DevWeb_Fullstack.pdf'}
							className="download glowing bold"
						>
							Téléchargez mon CV en pdf !
						</a>
					</div>

					<Image
						src="/me.jpg"
						alt="Moi"
						className="homeImg"
						width={200}
						height={200}
						priority
					/>
				</div>
			</div>
		</main>
	);
};

export default Home;
