'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const handleMobileMenuClick = () => {
		setIsMobileMenuOpen(false);
	};
	const pathname = usePathname();
	const activLinkHome = pathname === '/' ? 'underline' : '';
	const activLinkBlogs = pathname.includes('/blogs/page/') ? 'underline' : '';
	return (
		// TODO: Double check InVision | Bitbucket | SB website to see if I can get the right banner image
		<header className="relative h-48 bg-[url('/images/header.jpg')] bg-cover bg-center px-6 py-6 shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.3)] sm:h-[250px] sm:px-10">
			{/* TODO: Add mobile menu transition/animation comming for the left|top + Pick the right bg color. */}
			{isMobileMenuOpen && (
				<div className="absolute bottom-0 left-0 top-0 z-10 w-full space-y-6 overflow-hidden bg-secondary p-6">
					<div className="flex items-center justify-between">
						<Link href="/" className="h-10 w-40">
							<Image
								src="/images/logo.svg"
								width={300}
								height={70}
								alt="SB logo"
								className="mb-2"
							/>
						</Link>
						<button onClick={handleMobileMenuClick}>
							<MdOutlineClose className="h-8 w-8 fill-white transition-transform duration-150 hover:scale-[1.03] sm:hidden" />
						</button>
					</div>
					<nav>
						<ul className="space-y-3">
							<li>
								<Link
									onClick={handleMobileMenuClick}
									href="/"
									className={`text-2xl font-bold text-white decoration-[#F27623] decoration-[3px] underline-offset-4 hover:underline ${activLinkHome} transition-transform duration-150 hover:scale-[1.03]`}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									onClick={handleMobileMenuClick}
									href="/blogs/page/1"
									className={`text-2xl font-bold text-white decoration-[#F27623] decoration-[3px] underline-offset-4 hover:underline ${activLinkBlogs} transition-transform duration-150 hover:scale-[1.03]`}
								>
									Blogs
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			)}
			<nav className="flex items-center justify-between">
				<Link href="/" className="h-10 w-40 sm:h-20 sm:w-80">
					<Image
						src="/images/logo.svg"
						width={300}
						height={70}
						alt="SB logo"
						className="mb-2"
					/>
				</Link>
				<button onClick={() => setIsMobileMenuOpen(true)}>
					<GiHamburgerMenu className="h-6 w-6 fill-white transition-transform duration-150 hover:scale-[1.03] sm:hidden" />
				</button>
				<ul className="hidden flex-row items-center gap-x-8 sm:flex">
					<li>
						<Link
							href="/"
							className={`text-link font-bold text-white decoration-[#F27623] decoration-[3px] underline-offset-4 hover:underline ${activLinkHome} transition-transform duration-150 hover:scale-[1.03]`}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/blogs/page/1"
							className={`text-link font-bold text-white decoration-[#F27623] decoration-[3px] underline-offset-4 hover:underline ${activLinkBlogs} transition-transform duration-150 hover:scale-[1.03]`}
						>
							Blogs
						</Link>
					</li>
				</ul>
			</nav>
			{pathname.includes('/blogs/page/') && (
				<h1 className="mt-6 text-center text-3xl font-bold text-white sm:mt-3 sm:text-5xl">
					Blog
				</h1>
			)}
		</header>
	);
};
export default Header;
