// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
	const router = useRouter
	return (
		<nav className="sideNav">
			<div className="round-container">
				<ul>
					<li>
						<Link href="/">
							<FontAwesomeIcon
								icon="fa-solid fa-house"
								className="navIcon"
							/>
							<span className="navTitle">Home</span>
						</Link>
					</li>
					<li>
						<Link href="/pages/about">
							<FontAwesomeIcon
								icon="fa-solid fa-circle-user"
								className="navIcon"
							/>
							<span className="navTitle">About</span>
						</Link>
					</li>
					<li>
						<Link href="/pages/career">
							<FontAwesomeIcon
								icon="fa-solid fa-briefcase"
								className="navIcon"
							/>
							<span className="navTitle">Career</span>
						</Link>
					</li>
					<li>
						<Link href="/pages/portfolio">
							<FontAwesomeIcon
								icon="fa-solid fa-laptop-code"
								className="navIcon"
							/>
							<span className="navTitle">Portfolio</span>
						</Link>
					</li>
					<li>
						<Link href="/pages/contact">
							<FontAwesomeIcon
								icon="fa-solid fa-envelope"
								className="navIcon"
							/>
							<span className="navTitle">Contact</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
