import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Nav from './components/Nav';
import Circles from './components/CirclesBackground';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome);

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Laure\'s website',
	description: 'Mon portfolio',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Nav />
				<Circles />
				{children}
			</body>
		</html>
	);
}
