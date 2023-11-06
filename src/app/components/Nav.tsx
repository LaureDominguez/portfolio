import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({
	href,
	icon,
	title,
}: {
	href: string;
	icon: any;
	title: string;
}) => (
	<li>
		<Link href={href}>
			<FontAwesomeIcon
				icon={icon}
				className="navIcon"
			/>
			<span className="navTitle">{title}</span>
		</Link>
	</li>
);

const Nav = () => {
	const router = useRouter;

	const navItems = [
		{ href: '/', icon: 'fa-solid fa-house', title: 'Home' },
		{ href: '/pages/about', icon: 'fa-solid fa-circle-user', title: 'About' },
		{ href: '/pages/career', icon: 'fa-solid fa-briefcase', title: 'Career' },
		{
			href: '/pages/portfolio',
			icon: 'fa-solid fa-laptop-code',
			title: 'Portfolio',
		},
		{ href: '/pages/contact', icon: 'fa-solid fa-envelope', title: 'Contact' },
	];

	return (
		<nav className="sideNav">
			<div className="round-container">
				<ul className="menu">
					{navItems.map((item, index) => (
						<NavItem
							key={index}
							href={item.href}
							icon={item.icon}
							title={item.title}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
