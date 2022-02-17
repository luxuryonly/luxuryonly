import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiPhone } from 'react-icons/fi';

export const Navbar = () => {
	const { asPath: path } = useRouter();

	return (
		<header>
			<img className="cherry-left" src="/cherryblossom2.webp" alt="" />
			<img className="cherry-right" src="/cherryblossom2.webp" alt="" />
			<div className="background-diagonal"></div>
			<nav className="px-2 border-gray-200 md:pt-2">
				<div className="container flex flex-wrap justify-between items-center mx-auto">
					<div className="flex items-center mt-2">
						<Link href="/" aria-label="Company" passHref>
							<img
								className="cursor-pointer w-12"
								src="/logo.webp"
								alt=""
								width="70"
							/>
						</Link>
						<div className="flex flex-col ml-2">
							<h1 className="text-lg lg:text-2xl font-semibold font-logo tracking-wider text-gray-1000">
								Luxury Only
							</h1>
							<h2 className="text-xs md:text-sm tracking-widest">Cattery</h2>
						</div>
					</div>
					<Link href="tel:240-515-6701" passHref>
						<div className="cursor-pointer flex items-center text-sm text-gray-1000 md:hidden">
							<FiPhone />
							<p className="pl-2 text-lg">(240) 515-6701</p>
						</div>
					</Link>

					<button
						data-collapse-toggle="mobile-menu"
						type="button"
						className="inline justify-center items-center ml-3 mr-1 text-gray-400 rounded-lg
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
					<div
						className="hidden w-full md:block md:w-auto z-40"
						id="mobile-menu"
					>
						<ul
							className="flex flex-col mt-4 md:flex-row md:space-x-8
						md:mt-0 md:text-sm lg:text-lg md:font-medium bg-white sm:bg-inherit"
						>
							<li className={path === '/' ? 'active-nav' : 'nav-item'}>
								<Link href="/">Home</Link>
							</li>
							<li className={path === '/about' ? 'active-nav' : 'nav-item'}>
								<Link href="/about">About</Link>
							</li>
							<li
								className={
									path === '/kittens' || path === '/queens' || path === '/kings'
										? 'sm:border-b-2 sm:border-beige-800'
										: ''
								}
							>
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									className={`flex text-base lg:text-xl justify-between
									items-center py-2 pr-4 pl-3 w-full text-gray-700
									border-b border-gray-100 hover:bg-gray-50
									md:hover:bg-transparent md:border-0 md:hover:text-blue-700
									md:p-0 md:w-auto md:font-medium ${
										path === '/kittens' ||
										path === '/queens' ||
										path === '/kings'
											? 'sm:text-beige-800'
											: ''
									}`}
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
									className="hidden z-10 w-44 text-base list-none bg-white
									rounded divide-y divide-gray-100 shadow"
								>
									<ul
										className="py-1 cursor-pointer"
										aria-labelledby="dropdownLargeButton"
									>
										<Link href="/kings" passHref>
											<li
												className="block py-2 px-4 text-sm text-gray-700
												hover:bg-gray-100"
											>
												Kings
											</li>
										</Link>
										<Link href="/queens" passHref>
											<li
												className="block py-2 px-4 text-sm text-gray-700
												hover:bg-gray-100"
											>
												Queens
											</li>
										</Link>
										<Link href="/kittens" passHref>
											<li
												className="block py-2 px-4 text-sm text-gray-700
												hover:bg-gray-100"
											>
												Kittens
											</li>
										</Link>
									</ul>
								</div>
							</li>
							<li className={path === '/faq' ? 'active-nav' : 'nav-item'}>
								<Link href="/faq">FAQ</Link>
							</li>
							<li className={path === '/contact' ? 'active-nav' : 'nav-item'}>
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>
					<Link href="tel:240-515-6701" passHref>
						<div className="cursor-pointer md:flex text-xl font-medium items-center text-gray-1000 hidden">
							<FiPhone />
							<p className="pl-1">(240) 515-6701</p>
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
};
