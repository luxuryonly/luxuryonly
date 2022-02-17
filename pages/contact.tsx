import type { NextPage } from 'next';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Contact: NextPage = () => {
	return (
		<section className="body-font relative lg:py-10 mb-10">
			<div className="container px-5 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="text-5xl md:text-6xl font-logo text-center font-medium mt-12 mb-5">
						Contact Us
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						We are here to answer all of your questions!
						<br />
						The best way to get immediate answers is by calling us!
					</p>
				</div>
				<form
					className="lg:w-1/2 md:w-2/3 mx-auto"
					action="https://formsubmit.co/info@luxuryonlykittens.com"
					method="POST"
				>
					<div className="flex flex-wrap -m-2">
						<div className="p-2 w-1/2">
							<div className="relative">
								<label htmlFor="name" className="input-label">
									Name
								</label>
								<input
									className="input-field"
									type="text"
									id="name"
									name="name"
									required={true}
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label htmlFor="email" className="input-label">
									Email
								</label>
								<input
									className="input-field"
									type="email"
									id="email"
									name="email"
									required={true}
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label htmlFor="telephone" className="input-label">
									Phone Number
								</label>
								<input
									className="input-field"
									type="tel"
									name="telephone"
									id="telephone"
									pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
									required={true}
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label htmlFor="message" className="input-label">
									Message
								</label>
								<textarea
									className="w-full bg-beige-100 rounded-lg border
									border-gray-300 focus:border-blue-500 focus:bg-white
									focus:ring-2 focus:ring-blue-200 h-32 text-base
									outline-none text-gray-700 py-1 px-3 resize-none
									leading-6 transition-colors duration-200 ease-in-out"
									id="message"
									name="message"
									placeholder="What would you like to know?"
								></textarea>
							</div>
						</div>
						<div className="p-2 w-full">
							<button className="flex mx-auto text-white bg-beige-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
								Submit Form
							</button>
						</div>
						<div className="flex flex-col justify-center items-center p-2 w-full pt-8 mt-8 border-t border-beige-800 text-center">
							<h3 className="font-logo text-3xl font-medium mb-2">
								Luxury Only Cattery
							</h3>

							<div className="leading-relaxed text-center flex flex-col justify-center items-center">
								<p className="w-60 mb-2">For any questions, please call us!</p>
								<Link href="tel:240-515-6701" passHref>
									<div className="cursor-pointer flex mb-2 items-center font-medium lg:text-lg">
										<FiPhone />
										<p className="pl-2">(240) 515-6701</p>
									</div>
								</Link>
								<div className="flex items-center mb-1 lg:text-lg">
									<HiOutlineMail />
									<p className="text-blue-500 pl-2">
										<Link href="mailto:info@luxuryonlykittens.com">
											info@LuxuryOnlyKittens.com
										</Link>
									</p>
								</div>
								<div className="flex items-center font-medium lg:text-lg leading-normal mb-5">
									<MdOutlineLocationOn />
									<p className="pl-2">North Bethesda, Maryland</p>
								</div>
							</div>
							<div className="flex flex-wrap justify-center cursor-pointer">
								<div className="p-2 md:p-4">
									<a
										href="https://www.instagram.com/scottishfoldluxury"
										target="_blank"
										rel="noreferrer"
									>
										<div className="flex justify-center sm:justify-start items-center mb-1">
											<FaInstagram />
											<p className="pl-2">@ScottishFoldLuxury</p>
										</div>
									</a>
									<a
										href="https://www.facebook.com/scottishfoldluxury"
										target="_blank"
										rel="noreferrer"
									>
										<div className="flex justify-center sm:justify-start items-center mb-1">
											<FaFacebookSquare />
											<p className="pl-2">@ScottishFoldLuxury</p>
										</div>
									</a>
								</div>
								<div className="p-2 md:p-4">
									<a
										href="https://www.instagram.com/ragdollkittensluxury"
										target="_blank"
										rel="noreferrer"
									>
										<div className="flex justify-center sm:justify-start items-center mb-1">
											<FaInstagram />
											<p className="pl-2">@RagdollKittensLuxury</p>
										</div>
									</a>
									<a
										href="https://www.facebook.com/ragdollsluxury"
										target="_blank"
										rel="noreferrer"
									>
										<div className="flex justify-center sm:justify-start items-center mb-1">
											<FaFacebookSquare />
											<p className="pl-2">@RagdollsLuxury</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
