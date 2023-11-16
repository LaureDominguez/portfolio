'use client'
import Link from 'next/link';
import { isMobileOnly } from 'react-device-detect';
import { bubble as Menu } from 'react-burger-menu';

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
import classNames from 'classnames';


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
				className={
					classNames({
						activNav: isActive,
						menuItem: isMobileOnly
					})
				}
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

const NavList = ({
	items,
}: {
	items: Array<{ href: string; icon: any; title: string }>;
}) => (
	<ul>
		{items.map((item, index) => (
			<NavItem
				key={index}
				href={item.href}
				icon={item.icon}
				title={item.title}
			/>
		))}
	</ul>
);


const BurgerMenu = () => {
	return (
		<Menu>
			<NavList items={navItems} />
		</Menu>
	);
}

const SideNav = () => {
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
				<NavList items={navItems} />
			</div>
		</nav>
	);
}

const Nav = () => (isMobileOnly ? <BurgerMenu /> : <SideNav />);

export default Nav;
