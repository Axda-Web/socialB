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
				<div className="mx-auto flex w-full flex-col justify-between sm:h-screen sm:min-h-[1000px]">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
