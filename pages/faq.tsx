import type { NextPage } from 'next';
import { ReactNode, useState } from 'react';

const Item = ({ title, children }: { title: string; children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border rounded shadow-sm">
			<button
				type="button"
				aria-label="Open item"
				title="Open item"
				className="flex items-center justify-between w-full p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className="text-lg font-medium">{title}</p>
				<div className="flex items-center justify-center w-8 h-8 border rounded-full">
					<svg
						viewBox="0 0 24 24"
						className={`w-3 text-gray-600 transition-transform duration-200 ${
							isOpen ? 'transform rotate-180' : ''
						}`}
					>
						<polyline
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeMiterlimit="10"
							points="2,7 12,17 22,7"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</button>
			{isOpen && (
				<div className="p-4 pt-0">
					<p className="text-gray-700">{children}</p>
				</div>
			)}
		</div>
	);
};

const Faq: NextPage = () => {
	return (
		<>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
					<div className="flex flex-col mb-16 sm:text-center">
						<a href="/" className="mb-6 sm:mx-auto">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
								<svg
									className="w-10 h-10 text-deep-purple-accent-400"
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
						</a>
						<div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
								<span className="relative inline-block">
									<svg
										viewBox="0 0 52 24"
										fill="currentColor"
										className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
									>
										<defs>
											<pattern
												id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
												x="0"
												y="0"
												width=".135"
												height=".30"
											>
												<circle cx="1" cy="1" r=".7" />
											</pattern>
										</defs>
										<rect
											fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
											width="52"
											height="24"
										/>
									</svg>
									<span className="relative">Frequently</span>
								</span>{' '}
								Asked Questions
							</h2>
							<p className="text-base text-gray-700 md:text-lg">
								We have listed the most popular questions, but if you don&apos;t
								find the question you are looking for, please contact us (571)
								201-6369 and we will get back to you as soon as possible.
							</p>
						</div>
					</div>
					<div className="space-y-4">
						<Item title="What documents come with the kitten?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
						<Item title="Are kittens spayed/neutered?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
						<Item title="How much is a kitten?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
						<Item title="Can I reserve a kitten?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
						<Item title="What documents come with the kitten?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
						<Item title="Can I return the kitten?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
						<Item title="What vaccines will my kitten come with?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
						<Item title="What will my kitten come with?">
							- TICA registration (after spay/neuter) - Health records (Proof of
							vaccinations & Vet Exam) - Sample of Food (Soft & Kibble) -
							Contract & Health Guarantee - A blanket that smells like mom &
							siblings - Favorite toy - Lifetime care support from Meow Genes
						</Item>
						<Item title="Will my kitten be registered?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
						<Item title="What kinds of food do you feed your cats?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
						<Item title="Is there a contract?">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</Item>
					</div>
				</div>
			</div>
		</>
	);
};

export default Faq;
