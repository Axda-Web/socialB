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
		<header className="relative mx-auto w-full max-w-[1440px] bg-cover bg-center px-6 py-6 sm:px-12">
			{/* TODO: Add mobile menu transition/animation comming for the left|top + Pick the right bg color. */}
			{isMobileMenuOpen && (
				<div className="absolute bottom-0 left-0 top-0 z-30 h-52 w-full space-y-6 overflow-hidden bg-secondary p-6">
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
					<GiHamburgerMenu className="h-6 w-6 fill-secondary transition-transform duration-150 hover:scale-[1.03] sm:hidden" />
				</button>
				<ul className="hidden flex-row items-center gap-x-8 sm:flex">
					<li>
						<Link
							href="/"
							className={`text-link font-bold text-secondary decoration-[#F27623] decoration-[3px] underline-offset-4 hover:underline ${activLinkHome} transition-transform duration-150 hover:scale-[1.03]`}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/blogs/page/1"
							className={`text-link font-bold text-secondary decoration-[#F27623] decoration-[3px] underline-offset-4 hover:underline ${activLinkBlogs} transition-transform duration-150 hover:scale-[1.03]`}
						>
							Blogs
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
