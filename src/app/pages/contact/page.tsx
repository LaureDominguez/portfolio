import contactData from '@/app/public/contact.json';

const Contact = () => {
	return (
		<div>
			<h1>Bienvenue sur la page contact</h1>
			<form>
				<input
					type="text"
					placeholder="Votre nom"
				/>
				<input
					type="email"
					placeholder="Votre adresse e-mail"
				/>
				<textarea placeholder="Votre message" />
				<button type="submit">Envoyer</button>
			</form>
			<h2>contactez-moi</h2>
			<ul>
				<li>{contactData.postMail}</li>
				<li>{contactData.email}</li>
				<li>{contactData.phone}</li>
				<li>{contactData.linkedIn}</li>
				<li>{contactData.gitHub}</li>
			</ul>
		</div>
	);
};

export default Contact;
