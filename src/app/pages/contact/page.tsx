import contactData from '@/app/public/contact.json';

const Contact = () => {
	return (
		<main>
			<h1>Contactez-moi !</h1>
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
			<ul>
				<li>{contactData.postMail}</li>
				<li>{contactData.email}</li>
				<li>{contactData.phone}</li>
				<li>{contactData.linkedIn}</li>
				<li>{contactData.gitHub}</li>
			</ul>
		</main>
	);
};

export default Contact;
