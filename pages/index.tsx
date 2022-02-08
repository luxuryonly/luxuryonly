import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeCarousel } from 'src/components/Home/HomeCarousel';
import { MainCarousel } from 'src/components/Home/MainCarousel';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section
				className="container mx-auto flex px-5 md:pb-24
				md:pt-16 md:flex-row flex-col
				justify-center items-center pt-10"
			>
				<img
					className="w-1/2 mb-8 md:hidden"
					src="/fulllogo.webp"
					alt="LuxuryOnly Logo"
				/>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
					<MainCarousel />
				</div>
				<div className="md:w-1/2 lg:pl-28 md:pl-16 flex flex-col  items-center">
					<img
						className="xl:ml-8 w-3/4 hidden md:inline"
						src="/fulllogo.webp"
						alt="LuxuryOnly Logo"
					/>
					<p className="my-8 max-w-lg px-5 leading-relaxed">
						We treat our kittens as our children who are raised with love, care,
						and dedication. We are proud of our distinguished, prize winning
						kittens and only offer them into good homes where they will be loved
						and pampered. We are a state-of-the-art boutique breeder of precious
						cats located in Bethesda, MD. If you are looking for high-quality,
						healthy, well-socialized and lovable kittens, then you are in the
						right place! We truly love cats and put a lot of thoughts, love and
						care in breeding our cats.
					</p>
				</div>
			</section>

			<section className="mb-28 mt-10">
				<h2 className="text-center text-2xl">Our Specialty Breeds</h2>
				<div className="flex flex-col basis-full justify-center md:items-stretch items-center md:flex-wrap md:flex-row">
					<div className="nft-card">
						<img
							className="breed-card-img"
							src="/Kittens/Landscape/kitten11.webp"
							alt=""
						/>
						<div className="p-5">
							<h5 className="breed-card-heading">British Shorthairs</h5>
							<p className="p-4 text-gray-700">
								British Shorthair cats are an absolute joy to own. These
								affectionate pets are ideal companions for families with
								children and other pets due to their easy going nature, but they
								can adapt to a wide range of environments. The British Shorthair
								breed is much calmer than other cats. You will see your British
								Shorthair play and run for a few minutes, but these cats are
								calm and laidback most of the time. It’s a cat that will
								surprise you with its intelligence, loyalty, and affection.
							</p>
						</div>
					</div>
					<div className="nft-card">
						<img
							className="breed-card-img"
							src="/Kittens/Landscape/kitten9.webp"
							alt=""
						/>
						<div className="p-5">
							<h5 className="breed-card-heading">Scottish Folds</h5>
							<p className="p-4 text-gray-700">
								The Scottish Fold is a sweet, charming breed. They are an easy
								cat to live with and to care for. They are affectionate and are
								comfortable with all members of their family. They are attentive
								without being overly demanding. They boast a medium energy level
								compared to other cats and love to play games and interact with
								the family. This kitten-like behavior is retained throughout
								their whole lives which makes these enigmatic cats popular with
								families.
							</p>
						</div>
					</div>
					<div className="nft-card">
						<img
							className="breed-card-img"
							src="/Kittens/Landscape/kitten10.webp"
							alt=""
						/>
						<div className="p-5">
							<h5 className="breed-card-heading">Ragdolls</h5>
							<p className="p-4 text-gray-700">
								Ragdoll cats are social, happily spend time in the house of the
								owner and rarely wander out on their own. They love being with
								the owner, they yearn for attention and enjoy the company of
								people. They love being embraced by people and often snuggle up
								in their lap. They enjoy following their owners and doing what
								they are doing. Not only do they like people, but they also like
								other cats and other pets, including dogs. In fact, they even
								like strangers! They are extremely accommodating and make an
								obedient pet.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="text-gray-400 bg-beige-100 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						<div className="p-4 md:w-1/3">
							<div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
								<img
									className="lg:h-48 md:h-36 w-full object-cover object-center"
									src="/Kittens/Landscape/kitten11.webp"
								/>
								<div className="p-6">
									<h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
										CATEGORY
									</h2>
									<h1 className="title-font text-lg font-medium text-white mb-3">
										The Catalyzer
									</h1>
									<p className="leading-relaxed mb-3">
										Photo booth fam kinfolk cold-pressed sriracha leggings
										jianbing microdosing tousled waistcoat.
									</p>
									<div className="flex items-center flex-wrap ">
										<a className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">
											Learn More
											<svg
												className="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</a>
										<span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
											<svg
												className="w-4 h-4 mr-1"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
												<circle cx="12" cy="12" r="3"></circle>
											</svg>
											1.2K
										</span>
										<span className="text-gray-500 inline-flex items-center leading-none text-sm">
											<svg
												className="w-4 h-4 mr-1"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
											</svg>
											6
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="p-4 md:w-1/3">
							<div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
								<img
									className="lg:h-48 md:h-36 w-full object-cover object-center"
									src="/Kittens/Landscape/kitten10.webp"
								/>
								<div className="p-6">
									<h1 className="title-font text-lg text-center font-medium text-white mb-3">
										Healthy = Happy
									</h1>
									<p className="leading-relaxed mb-3">
										Luxury Only is a TICA registered cattery. We take pride in
										continuing to procreate the purest, healthiest Champion
										bloodlines of British Shorthair cats. Following breeding
										guidelines is extremely important to us to ensure
										kittens&apos; perfect health.
									</p>
								</div>
							</div>
						</div>
						<div className="p-4 md:w-1/3">
							<div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
								<img
									className="lg:h-48 md:h-36 w-full object-cover object-center max-w"
									src="/Kittens/Landscape/kitten9.webp"
								/>
								<div className="p-6">
									<h1 className="title-font text-lg text-center font-medium text-white mb-3">
										A Bestfriend Forever
									</h1>
									<p className="leading-relaxed mb-3">
										Besides looking gorgeous and cute, these breeds also carry
										the sweetest and most caring personalities. There is nothing
										more they love than being around their people, participating
										in every activity. British Shorthairs are famous for being
										affectionate, playful, and active pets.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<HomeCarousel />
		</>
	);
};

export default Home;
