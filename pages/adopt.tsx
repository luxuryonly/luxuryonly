import type { NextPage } from 'next';
import Link from 'next/link';

const Adopt: NextPage = () => {
	return (
		<div className="px-4 mb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
			<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
				<h1 className="main-heading">Adoption Information</h1>
				<p className="text-base text-gray-700 md:text-lg">
					Adopting a new kitten with us is very easy! Below are the simple steps
					in the adoption process. For more information, please contact us at{' '}
					<span className="text-blue-600">
						<Link href="tel:240-515-6701">(240) 515-6701</Link>
					</span>
					.
				</p>
			</div>
			<div className="grid gap-8 row-gap-0 lg:grid-cols-3">
				<div className="relative text-center">
					<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
						<svg
							className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
							stroke="currentColor"
							viewBox="0 0 52 52"
						>
							<polygon
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
								fill="none"
								points="29 13 14 29 25 29 23 39 38 23 27 23"
							/>
						</svg>
					</div>
					<h6 className="mb-2 text-2xl font-extrabold">Step 1</h6>
					<p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto leading-relaxed">
						First step is choosing your new kitten! You may need to provide a
						security deposit to reserve the kitten in the event that they are
						not old enough to leave mom yet. If we do not have a kitten
						you&apos;d like, you can join our waiting list for the specific
						color you&apos;re looking for.
					</p>

					<div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
						<svg
							className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							viewBox="0 0 24 24"
						>
							<line
								fill="none"
								strokeMiterlimit="10"
								x1="2"
								y1="12"
								x2="22"
								y2="12"
							/>
							<polyline
								fill="none"
								strokeMiterlimit="10"
								points="15,5 22,12 15,19 "
							/>
						</svg>
					</div>
				</div>
				<div className="relative text-center">
					<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
						<svg
							className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
							stroke="currentColor"
							viewBox="0 0 52 52"
						>
							<polygon
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
								fill="none"
								points="29 13 14 29 25 29 23 39 38 23 27 23"
							/>
						</svg>
					</div>
					<h6 className="mb-2 text-2xl font-extrabold">Step 2</h6>
					<p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto leading-relaxed">
						Once a kitten has been chosen, we next sign a contract & you pick a
						name for the kitten that will go on the paper work & certificate.
					</p>

					<div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
						<svg
							className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							viewBox="0 0 24 24"
						>
							<line
								fill="none"
								strokeMiterlimit="10"
								x1="2"
								y1="12"
								x2="22"
								y2="12"
							/>
							<polyline
								fill="none"
								strokeMiterlimit="10"
								points="15,5 22,12 15,19 "
							/>
						</svg>
					</div>
				</div>
				<div className="relative text-center">
					<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
						<svg
							className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
							stroke="currentColor"
							viewBox="0 0 52 52"
						>
							<polygon
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
								fill="none"
								points="29 13 14 29 25 29 23 39 38 23 27 23"
							/>
						</svg>
					</div>
					<h6 className="mb-2 text-2xl font-extrabold">Step 3</h6>
					<p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto leading-relaxed">
						This is the final and best step - you get to take your new kitten
						home! With your new kitten you will receive the signed contract, a
						pedigree certificate, and a veterinarian passport with a history of
						vaccinations.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Adopt;
