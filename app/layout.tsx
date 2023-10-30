import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Laure\'s website',
  description: 'Mon portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
		<html lang="en">
			<body className={inter.className}>
				<Nav />
				<main>{children}</main>
			</body>
		</html>
	);
}
