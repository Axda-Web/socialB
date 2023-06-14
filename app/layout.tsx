import './globals.css';
import { Inter } from 'next/font/google';

import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="mx-auto flex h-screen w-full max-w-[1440px] flex-col justify-between">
					<div>
						<Header />
						{children}
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
