'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faCircleUser,
	faBriefcase,
	faLaptopCode,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';


const NavItem = ({
	href,
	icon,
	title,
}: {
	href: string;
	icon: any;
	title: string;
	}) => {


	const pathName = usePathname();
	const isActive = pathName === href;
	return (
		<li>
			<Link
				href={href}
				className={isActive ? 'activNav' : ''}
			>
				<FontAwesomeIcon
					icon={icon}
					className="navIcon"
				/>
				<span className="navTitle">{title}</span>
			</Link>
		</li>
	);
};

const Nav = () => {
	const navItems = [
		{ href: '/', icon: faHouse, title: 'Home' },
		{ href: '/pages/about', icon: faCircleUser, title: 'About' },
		{ href: '/pages/career', icon: faBriefcase, title: 'Career' },
		{
			href: '/pages/portfolio',
			icon: faLaptopCode,
			title: 'Portfolio',
		},
		{ href: '/pages/contact', icon: faEnvelope, title: 'Contact' },
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
