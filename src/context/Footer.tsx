import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';

export const Footer = () => {
	return (
		<footer className="py-8 mt-14 bg-beige-200 md:p-8">
			<div className="max-w-4xl mx-auto flex flex-wrap md:flex-nowrap justify-around md:justify-between">
				<div className="mb-6 md:mb-0 flex flex-col items-center w-full md:w-max">
					<img
						className="xl:ml-8 w-3/4 w-24"
						src="/logo.webp"
						alt="LuxuryOnly Logo"
					/>
					<h4 className="text-center font-logo font-medium text-4xl">
						Luxury Only
					</h4>
				</div>
				<ul>
					<li>
						<Link href="/about">About Us</Link>
					</li>
					<li>
						<Link href="/kittens">Kittens</Link>
					</li>
					<li>
						<Link href="/queens">Queens</Link>
					</li>
					<li>
						<Link href="/kings">Kings</Link>
					</li>
					<li>
						<Link href="/adopt">Adopt</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
				<div>
					<p className="mb-4">
						<Link href="/faq">FAQ</Link>
					</p>
					<Link href="tel:571-201-6369" passHref>
						<div className="flex items-center text-sm text-gray-1000">
							<FiPhone />
							<p className="pl-2 text-lg">(571) 201-6369</p>
						</div>
					</Link>
					<p className="text-blue-500">
						<Link href="mailto:hripunov@gmail.com">hripunov@gmail.com</Link>
					</p>
					<p className="leading-normal mb-5">North Bethesda, Maryland</p>
				</div>
			</div>
			<hr className="border-gray-200 sm:mx-auto my-6" />
			<p className="text-center text-blue-600">
				<Link href="#">Back to Top</Link>
			</p>
			<p className="flex items-center justify-center text-center text-sm text-gray-500 mt-1">
				© 2022 Luxury Only Cattery™. All Rights Reserved.
			</p>
		</footer>
	);
};
