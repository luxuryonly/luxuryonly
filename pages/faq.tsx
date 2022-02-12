import type { NextPage } from 'next';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

const Item = ({ title, children }: { title: string; children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border rounded shadow-sm bg-beige-100">
			<button
				type="button"
				aria-label="Open item"
				title="Open item"
				className="flex items-center justify-between w-full p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className="text-lg font-medium leading-relaxed">{title}</p>
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
		<section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
			<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
				<div className="flex flex-col mb-16 sm:text-center">
					<div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
						<h1 className="main-heading">Frequently Asked Questions</h1>
						<p className="text-base text-gray-700 md:text-lg">
							We have listed the most popular questions, but if you don&apos;t
							find the answer you are looking for, please call us at{' '}
							<span className="text-blue-500 font-medium">
								<Link href="tel:240-515-6701">240-515-6701</Link>
							</span>{' '}
							for more information.
						</p>
					</div>
				</div>
				<div className="space-y-4 mb-16">
					<Item title="Can I reserve a kitten?">
						Yes! To reserve a kitten, please call us at{' '}
						<span className="text-blue-500 font-medium">
							<Link href="tel:240-515-6701">240-515-6701</Link>
						</span>
						. After choosing a kitten we will sign a contract and collect a
						deposit. After the kitten is reserved we do NOT show it to any new
						customers.
					</Item>
					<Item title="Is there a waiting list to get a kitten?">
						Sometimes there is a waiting list for special kittens. We would try
						to do our best to fulfill your expectations within 6 months. For
						more information, call us at
						<span className="text-blue-500 font-medium">
							<Link href="tel:240-515-6701"> 240-515-6701</Link>
						</span>
						.
					</Item>
					<Item title="What vaccines will my kitten come with?">
						Breeding healthy kittens is our #1 priority above anything else.
						<br />
						We take this very seriously.
						<br /> <br />
						Every kitten comes with:
						<ol>
							<li>1. 2 rounds of deworming</li>
							<li>
								2. 2 rounds of FVRCP vaccines (Rhinotracheitis, calicivirus and
								panleukopenia)
							</li>
							<li>3. Bordetella</li>
						</ol>
					</Item>
					<Item title="What documents come with our kitten?">
						Your new kitten will come with:
						<ol>
							<li>1. A Signed Contract</li>
							<li>2. Pedigree certificate</li>
							<li>3. Veterinarian passport with a history of vaccinations</li>
						</ol>
					</Item>
					<Item title="Are kittens spayed/neutered?">
						No, we recommend to neuter or spay kittens at the age of 6-9 months
						and sending us proof of the procedure.
					</Item>
					<Item title="How much is a kitten?">
						Kittens start from $1,850. Adoption fee could be higher depending on
						the color and type of the kitten. Kittens with breeding rights start
						from $3,500.
					</Item>
					<Item title="Can I return my kitten?">
						Yes. After a kitten is adopted, we recommend you visit a doctor
						within 5 days to make sure that the kitten is healthy. If there are
						any issues, please contact us immediately. If you change your mind
						about the kitten, the cat must be returned to the original cattery
						and we would start helping them find a new family. In this scenario
						no adoption fee would be returned.
					</Item>
					<Item title="What will my kitten come with?">
						We give full instructions on how to take care of your new family
						member and how to feed them. We also provide you with a food sample
						or what they&apos;re used to eating.
					</Item>
					<Item title="Will my kitten be registered?">
						Yes! All of our kittens are registered with the World Cat Federation
						(WCF) and come with a Pedigree certification.
					</Item>
					<Item title="What kinds of food do you feed your cats?">
						We give recommendations on how to feed a kitten. We feed them
						top-quality wet food and grain-free dry food. Cat&apos;s dry food is
						balanced on nutrition and has everything that they need to stay
						strong and healthy.
					</Item>
					<Item title="Is there a contract?">
						Yes. With every new adoption there will be a contract. For any
						additional information, please contact us at{' '}
						<span className="text-blue-500 font-medium">
							<Link href="tel:240-515-6701"> 240-515-6701</Link>
						</span>
						. Our cattery&apos;s name is &quot;Luxury Only&quot; and the best
						contract person is Elena or Sergejs.
					</Item>
				</div>
			</div>
		</section>
	);
};

export default Faq;
