import type { NextPage } from 'next';

const About: NextPage = () => {
	return (
		<section className="body-font lg:py-10 mb-14">
			<h1 className="main-heading">About Us</h1>
			<div className="container px-5 mx-auto flex flex-col">
				<div className="lg:w-4/6 mx-auto">
					<div className="rounded-lg h-96 overflow-hidden sm:block hidden">
						<img
							alt="content"
							className="object-cover object-center h-full w-full"
							src="/Kittens/Scottish/scottish42.webp"
						/>
					</div>
					<div className="rounded-lg h-96 overflow-hidden sm:hidden">
						<img
							alt="content"
							className="object-cover object-center h-full w-full"
							src="/Kittens/Scottish/scottish28.webp"
						/>
					</div>
					<div className="flex flex-col sm:flex-row mt-10">
						<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
							<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-10 h-10"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div className="flex flex-col items-center text-center justify-center">
								<h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
									Elena Maximova
								</h2>
								<div className="w-12 h-1 bg-beige-800 rounded mt-2 mb-4"></div>
								<p className="text-base">
									Owner of Luxury Only.
									<br />
									Mother of many beautiful cats.
								</p>
							</div>
						</div>
						<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
							<p className="leading-relaxed text-lg mb-4">
								Since I was a child, I&apos;ve absolutely loved animals. Every
								summer I spent in a village where I was surrounded by nature. I
								enjoyed horse riding in the middle of the day, and always tried
								to wake up early enough to catch the rising sun. I spent a lot
								of evenings in the summer by my pony, fishing, and sitting next
								to my favorite friend - a cat. My first kitten was Lucie. She
								came into my life when I was a little girl. Since that moment, I
								had a dream to have house full of cats and kittens. In 2016 I
								had a chance to visit Ernest Hemingway&apos;s house in Key West.
								I fell in love with the harmony of nature, humans, and the way
								the cats lived in his home. This helped me finally realize my
								dream of living in a house full of cats, so I opened a cattery
								to make sure that every single cat would live a life full of
								love. I specialize in British and Scottish chinchillas, they are
								so kind & super sweet.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-20 mx-auto">
				<h3 className="main-heading">Certifications</h3>
				<p className="py-5 text-xl text-center mx-auto max-w-sm">
					Luxury Only is a proud registered member of TICA & WCF (World Cat
					Federation)!
				</p>
				<div className="max-w-7xl flex flex-wrap justify-between mx-auto">
					<div className="max-w-lg mx-auto">
						<h4 className="kitten-heading">TICA Certificate</h4>
						<img src="/ticacertificate.webp" alt="" />
					</div>
					<div className="max-w-lg mx-auto mt-12 lg:mt-0">
						<h4 className="kitten-heading">WCF Certificate</h4>
						<img src="/wcfcertificate.webp" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
