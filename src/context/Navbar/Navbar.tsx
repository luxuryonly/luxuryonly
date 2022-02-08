import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { FiPhone, FiChevronDown } from 'react-icons/fi';

export const Navbar = () => {
	const { asPath: path } = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-beige-100">
			<nav className="px-2 bg-white border-gray-200">
				<div className="container flex flex-wrap justify-between items-center mx-auto">
					<div className="flex flex-col items-center">
						<img src="/logo.png" alt="" width="70" />
						<p className="ml-2 text-md lg:text-lg font-bold tracking-wide text-gray-1000 uppercase">
							<Link href="/" aria-label="Company">
								Luxury Only
							</Link>
						</p>
					</div>
					<div className="flex items-center text-gray-1000 md:hidden">
						<FiPhone />
						<p className="pl-2">(571) 201-6369</p>
					</div>

					<button
						data-collapse-toggle="mobile-menu"
						type="button"
						className="inline justify-center items-center ml-3 text-gray-400 rounded-lg
						md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
						aria-controls="mobile-menu-2"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
						<svg
							className="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
						<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm lg:text-lg md:font-medium">
							<li
								className="block py-2 pr-4 pl-3 md:p-0 text-gray-700 border-b border-gray-100
									hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>
								<Link href="/">Home</Link>
							</li>
							<li
								className="block py-2 pr-4 pl-3 md:p-0 text-gray-700 border-b border-gray-100
									hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>
								<Link href="/about">About</Link>
							</li>
							<li>
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									className="flex justify-between items-center py-2 pr-4 pl-3 w-full text-gray-700 border-b border-gray-100 hover:bg-gray-50
									md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:font-medium"
								>
									Our Cats{' '}
									<svg
										className="ml-1 w-4 h-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</button>

								<div
									id="dropdownNavbar"
									className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
								>
									<ul className="py-1" aria-labelledby="dropdownLargeButton">
										<li
											className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
											// className={
											// 	path === '/adopt' ? 'active-nav' : 'nav-item'
											// }
										>
											<Link href="/kittens">Kittens</Link>
										</li>

										<li
											className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
											// className={
											// 	path === '/adopt' ? 'active-nav' : 'nav-item'
											// }
										>
											<Link href="/queens">Queens</Link>
										</li>
										<li
											className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
											// className={
											// 	path === '/adopt' ? 'active-nav' : 'nav-item'
											// }
										>
											<Link href="/kings">Kings</Link>
										</li>
									</ul>
								</div>
							</li>
							<li
								className="block py-2 pr-4 pl-3 md:p-0 text-gray-700 border-b border-gray-100
									hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>
								<Link href="/adopt">Adopt</Link>
							</li>
							<li
								className="block py-2 pr-4 pl-3 md:p-0 text-gray-700 border-b border-gray-100
									hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>
								<Link href="/faq">FAQ</Link>
							</li>
							<li
								className="block py-2 pr-4 pl-3 md:p-0 text-gray-700 border-b border-gray-100
									hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>
					<div className="md:flex font-medium items-center text-gray-1000 hidden">
						<FiPhone />
						<p className="pl-1">(571) 201-6369</p>
					</div>
				</div>
			</nav>

			{/* <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
					<ul className="flex items-center hidden space-x-8 lg:flex">
						<li className={path === '/' ? 'active-nav' : 'nav-item'}>
							<Link href="/">Home</Link>
						</li>
						<li className={path === '/about' ? 'active-nav' : 'nav-item'}>
							<Link href="/about">About Us</Link>
						</li>
						<li
							className={`dropdown dropdown-hover ${
								path === '/kittens' || path === '/queens' || path === '/kings'
									? 'active-nav'
									: 'nav-item'
							}`}
						>
							<div className="flex items-center text-gray-1000">
								<p>Our Cats</p>
								<FiChevronDown className="ml-1" />
							</div>
							<ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
								<li>
									<Link href="/kittens">Kittens</Link>
								</li>
								<li>
									<Link href="/queens">Queens</Link>
								</li>
								<li>
									<Link href="/kings">Kings</Link>
								</li>
							</ul>
						</li>
					</ul>
					<div className="flex flex-col items-center">
						<p className="ml-2 text-xl font-bold tracking-wide text-gray-1000 uppercase">
							<Link href="/" aria-label="Company">
								Luxury Only
							</Link>
						</p>
						<div className="flex items-center text-gray-1000">
							<FiPhone />
							<p className="pl-2">(571) 201-6369</p>
						</div>
					</div>
					<ul className="flex hidden items-center space-x-8 lg:flex">
						<li className={path === '/adopt' ? 'active-nav' : 'nav-item'}>
							<Link href="/adopt">Adopt</Link>
						</li>
						<li className={path === '/faq' ? 'active-nav' : 'nav-item'}>
							<Link href="/faq">FAQ</Link>
						</li>
						<li className={path === '/contact' ? 'active-nav' : 'nav-item'}>
							<Link href="/contact">Contact Us</Link>
						</li>
					</ul>
					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="p-5 bg-white border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<a
												href="/"
												aria-label="Company"
												title="Company"
												className="inline-flex items-center"
											>
												<svg
													className="w-8 text-deep-purple-accent-400"
													viewBox="0 0 24 24"
													strokeLinejoin="round"
													strokeWidth="2"
													strokeLinecap="round"
													strokeMiterlimit="10"
													stroke="currentColor"
													fill="none"
												>
													<rect x="3" y="1" width="7" height="12" />
													<rect x="3" y="17" width="7" height="6" />
													<rect x="14" y="1" width="7" height="6" />
													<rect x="14" y="11" width="7" height="12" />
												</svg>
												<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
													Company
												</span>
											</a>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}
											>
												<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-4">
											<li>
												<a
													href="/"
													aria-label="Our product"
													title="Our product"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
												>
													Product
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="Our product"
													title="Our product"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
												>
													Features
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="Product pricing"
													title="Product pricing"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
												>
													Pricing
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="About us"
													title="About us"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
												>
													About us
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="Sign in"
													title="Sign in"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
												>
													Sign in
												</a>
											</li>
											<li>
												<a
													href="/"
													className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
													aria-label="Sign up"
													title="Sign up"
												>
													Sign up
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div> */}
		</header>
	);
};
