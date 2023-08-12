import Link from 'next/link';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineLocationOn } from 'react-icons/md';
import {
	EMAIL_ADDRESS,
	GOOGLE_MAPS_ADDRESS,
	TEL_NUM_FORM,
	TEL_NUM_VIEW
} from 'src/config/constants';

export const Footer = () => (
	<footer className="py-8 bg-beige-200 md:p-8 border-t border-beige-700">
		<div className="max-w-4xl mx-auto flex flex-wrap md:flex-nowrap justify-around md:justify-between">
			<div className="mb-6 md:mb-0 flex flex-col items-center w-full md:w-max">
				<img
					className="cursor-pointer xl:ml-8 w-3/4 w-24"
					src="/logo.webp"
					alt="LuxuryOnly Logo"
				/>
				<h4 className="text-center font-logo font-medium text-4xl">
					Luxury Only
				</h4>
			</div>
			<ul>
				<li className="footer-item">
					<Link href="/about">About Us</Link>
				</li>
				<li className="footer-item">
					<Link href="/kings">Kings</Link>
				</li>
				<li className="footer-item">
					<Link href="/queens">Queens</Link>
				</li>
				<li className="footer-item">
					<Link href="/kittens">Kittens</Link>
				</li>
				<li className="footer-item">
					<Link href="/faq">FAQ</Link>
				</li>
				<li className="footer-item">
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
			<div className="leading-relaxed">
				<p className="w-60 mb-2">For any questions, please call us!</p>
				<Link href={`tel:${TEL_NUM_FORM}`} passHref>
					<div className="cursor-pointer flex mb-2 items-center font-medium lg:text-lg">
						<FiPhone />
						<p className="pl-2">{TEL_NUM_VIEW}</p>
					</div>
				</Link>
				<div className="flex items-center mb-1 lg:text-lg">
					<HiOutlineMail />
					<p className="text-blue-500 pl-2">
						<Link href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</Link>
					</p>
				</div>
				<div className="flex items-center font-medium lg:text-lg leading-normal mb-3">
					<MdOutlineLocationOn />
					<p className="pl-2">
						<a
							className="link-hover"
							href={GOOGLE_MAPS_ADDRESS}
							target="_blank"
							rel="noreferrer"
						>
							11540 D, Rockville Pike,
							<br />
							North Bethesda, MD 20852
						</a>
					</p>
				</div>
				<div className="flex flex-col justify-around cursor-pointer">
					<a
						href="https://www.instagram.com/scottishfoldluxury"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center mb-1">
							<FaInstagram />
							<p className="pl-2 text-sm md:text-base">@ScottishFoldLuxury</p>
						</div>
					</a>
					<a
						href="https://www.instagram.com/ragdollkittensluxury"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center mb-1">
							<FaInstagram />
							<p className="pl-2 text-sm md:text-base">@RagdollKittensLuxury</p>
						</div>
					</a>
					<a
						href="https://www.facebook.com/scottishfoldluxury"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center mb-1">
							<FaFacebookSquare />
							<p className="pl-2 text-sm md:text-base">@ScottishFoldLuxury</p>
						</div>
					</a>
					<a
						href="https://www.facebook.com/ragdollsluxury"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center mb-1">
							<FaFacebookSquare />
							<p className="pl-2 text-sm md:text-base">@RagdollsLuxury</p>
						</div>
					</a>
				</div>
			</div>
		</div>
		<hr className="border-gray-200 sm:mx-auto my-6" />
		<p className="text-center text-lg text-blue-600">
			<a href="#">Back to Top</a>
		</p>
		<div className="flex flex-col items-center justify-center text-center text-sm text-gray-500 mt-1">
			<p>© {new Date().getFullYear()} - Luxury Only Cattery</p>
			<p className="mt-1">All Rights Reserved.</p>
		</div>
		<p className="text-center text-sm text-gray-500 mt-1">Made with Love.♥</p>
	</footer>
);
