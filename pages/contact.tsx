import type { NextPage } from 'next';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';

const Contact: NextPage = () => {
	return (
		<section className="body-font relative">
			<div className="container px-5 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="text-5xl md:text-6xl font-logo text-center font-medium mt-12 mb-5">
						Contact Us
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						We are here to answer all of your questions!
					</p>
				</div>
				<form
					className="lg:w-1/2 md:w-2/3 mx-auto"
					action="https://formsubmit.co/adriandelgadoc1@gmail.com"
					method="POST"
				>
					<div className="flex flex-wrap -m-2">
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-gray-600"
								>
									Name
								</label>
								<input
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									type="text"
									id="name"
									name="name"
									required={true}
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									htmlFor="email"
									className="leading-7 text-sm text-gray-600"
								>
									Email
								</label>
								<input
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									type="email"
									id="email"
									name="email"
									required={true}
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label
									htmlFor="telephone"
									className="leading-7 text-sm text-gray-600"
								>
									Phone Number
								</label>
								<input
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
								<label
									htmlFor="message"
									className="leading-7 text-sm text-gray-600"
								>
									Message
								</label>
								<textarea
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									id="message"
									name="message"
								></textarea>
							</div>
						</div>
						<div className="p-2 w-full">
							<button className="flex mx-auto text-white bg-beige-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
								Submit Form
							</button>
						</div>
						<div className="flex flex-col justify-center items-center p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
							<h3 className="font-logo text-3xl font-medium mb-2">
								Luxury Only Cattery
							</h3>
							<Link href="tel:571-201-6369" passHref>
								<div className="flex justify-center items-center text-sm text-gray-1000">
									<FiPhone />
									<p className="pl-2 text-lg">(571) 201-6369</p>
								</div>
							</Link>
							<Link href="tel:202-270-9502" passHref>
								<div className="mb-2 flex justify-center items-center text-sm text-gray-1000">
									<FiPhone />
									<p className="pl-2 text-lg">(202) 270-9502</p>
								</div>
							</Link>
							<p className="text-blue-500">
								<Link href="mailto:hripunov@gmail.com">hripunov@gmail.com</Link>
							</p>
							<p className="leading-normal mb-5">North Bethesda, Maryland</p>

							<Link href="">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
