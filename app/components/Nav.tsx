// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from "next/link";
import { useRouter } from "next/navigation";

// library.add(fas)

const Nav = () => {
	const router = useRouter
	return (
		<nav className="sideNav">
			<div className="round-container">
				<ul>
					<li>
						<Link href="/">
							Home <span>pouet</span>
						</Link>
					</li>
					<li>
						<Link href="/pages/about">
							About <span>pouet</span>
						</Link>
					</li>
					<li>
						<Link href="/pages/portfolio">
							Portfolio <span>pouet</span>
						</Link>
					</li>
					<li>
						<Link href="/pages/contact">
							Contact <span>pouet</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
