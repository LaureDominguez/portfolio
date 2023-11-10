import Image from "next/image";

const Home = () => {
	return (
		<main>
			<div className="homeTitle">
				<h1>Laure DOMINGUEZ</h1>
				<h2>Développeuse Web FullStack</h2>
			</div>
			<div className="home">
				<div>
					<h3>Bonjour et bienvenue sur mon site !</h3>
					<p>
						Je suis ravie de vous accueillir sur ma page de présentation.
						<br />
						Je suis passionnée par les nouvelles technologies et je suis à la
						recherche d'une opportunité au sein d'une équipe dynamique.
						<br />
						Vous trouverez ici un aperçu de mon profil, de mes compétences
						techniques et de mes projets antérieurs.
						<br />
						Mon objectif est de collaborer avec une équipe expérimentée et
						innovante pour continuer à développer mes compétences et contribuer
						à des projets passionnants.
						<br />
						N'hésitez pas à explorer mon profil et à me contacter si vous
						cherchez une personne motivée et passionnée pour rejoindre votre
						équipe.
						<br />
						Je suis impatiente de relever de nouveaux défis avec vous !
					</p>
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
		</main>
	);
};

export default Home;
