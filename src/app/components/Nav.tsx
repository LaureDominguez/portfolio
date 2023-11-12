'use client'
import Link from 'next/link';
import { isMobileOnly } from 'react-device-detect';
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
import { useState } from 'react';


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

	const [isMenuOpen, setMenuOpen] = useState(false);

		const toggleMenu = () => {
			setMenuOpen(!isMenuOpen);
			console.log("pouet");
	};
	
		return (
			<nav className={isMobileOnly ? 'burger' : 'sideNav'}>
				{isMobileOnly ? (
					<button className='burgerButton' onClick={toggleMenu}>Boutton</button>
				) : null}
					<div className={isMobileOnly ? '' : 'round-container'}>
						<ul className={`menu ${isMenuOpen ? 'open' : 'closed'}`}>
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
