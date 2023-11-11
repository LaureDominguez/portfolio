import Link from "next/link";

const Portfolio = () => {

	return (
		<main>
			<div className="portfolio">
				<h1>Mes réalisations :</h1>

				<p>
					Dans le cadre de ma formation en développement web, il m'a été demandé
					de concevoir un site web en utilisant exclusivement{' '}
					<span className="bold">PHP</span>, <span className="bold">SQL</span>{' '}
					et <span className="bold">JavaScript</span>.
					<br />
					Les exigences du projet comprenaient la mise en place d'un{' '}
					<span className="bold">
						système de gestion et d'authentification des utilisateurs
					</span>
					, la création d'une{' '}
					<span className="bold">base de données relationnelle</span> comportant{' '}
					<span className="bold">plusieures tables interconnectées</span>, et
					différentes opérations
					<span className="bold">CRUD</span> personnalisées, ainsi que la
					réalisation d'un affichage dynamique en{' '}
					<span className="bold">fetch</span>.
					<br />
					Il est important de souligner que cette réalisation a été accomplie
					<span className="bold">
						{' '}
						sans l'utilisation de frameworks ou de bibliothèques de style
						externes
					</span>
					.
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
