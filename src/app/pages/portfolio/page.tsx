import Link from "next/link";

const Portfolio = () => {

	return (
		<main>
			<div className="portfolio">
				<h1>Mes réalisations :</h1>

				<p>
					Dans le cadre de ma formation en développement web, j'ai été chargée
					de concevoir un site web en utilisant exclusivement PHP, SQL et
					JavaScript.
					<br />
					Les exigences du projet comprenaient la mise en place d'un système de
					gestion et d'authentification des utilisateurs, la création d'une base
					de données interactive comportant plusieurs tables interconnectées,
					ainsi que la réalisation d'un affichage dynamique.
					<br />
					Il est important de souligner que cette réalisation a été accomplie
					sans l'utilisation de frameworks ou de bibliothèques de style
					externes.
					<br />
					Vous pouvez découvrir le résultat final en visitant le lien vers mon
					site web :
					<br />
					<Link
						href={'http://www.laure-web.fr'}
						target="_blank"
						rel="noopener noreferrer"
					>
						Les Pâtes du Chat
					</Link>
				</p>
			</div>
		</main>
	);
}

export default Portfolio;
