import contactData from '@/app/public/contact.json';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faPaperPlane,
	faLocationDot,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactItem = ({
	icon,
	href,
	text,
}: {
	icon: any;
	href: string | null;
	text: string;
}) => (
	<li>
		{href ? (
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon
					icon={icon}
					className="contactIcon"
				/>
				{text}
			</Link>
		) : (
			<>
				<FontAwesomeIcon
					icon={icon}
					className="contactIcon"
				/>
				{text}
			</>
		)}
	</li>
);

const Contact = () => {
	return (
		<main>
			<div className="contact">
				<h1>Contactez-moi !</h1>
				<ul>
					<ContactItem
						icon={faLocationDot}
						href={null}
						text={contactData.postMail}
					/>
					<ContactItem
						icon={faPaperPlane}
						href={`mailto:${contactData.email}`}
						text={contactData.email}
					/>
					<ContactItem
						icon={faPhone}
						href={`tel:${contactData.phone}`}
						text={contactData.phone}
					/>
					<ContactItem
						icon={faLinkedin}
						href={contactData.linkedIn}
						text={'linkedin.com/in/laure-dominguez'}
					/>
					<ContactItem
						icon={faGithub}
						href={contactData.gitHub}
						text={'github.com/lauredominguez'}
					/>
				</ul>
			</div>
		</main>
	);
};

export default Contact;
