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
					src="/fulllogo1.webp"
					alt="LuxuryOnly Logo"
				/>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
					<MainCarousel />
				</div>
				<div className="md:w-1/2 lg:pl-28 md:pl-16 flex flex-col items-center">
					<img
						className="xl:ml-8 w-3/4 hidden md:inline"
						src="/fulllogo1.webp"
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
			<section className="mb-16 mt-10 py-14 bg-beige-100">
				<h2 className="text-4xl md:text-6xl font-logo text-center font-medium my-5">
					Our Specialty Breeds
				</h2>
				<div className="flex flex-col basis-full justify-center md:items-stretch items-center md:flex-wrap md:flex-row">
					<div className="nft-card">
						<img
							className="breed-card-img"
							src="/Kittens/Landscape/kitten11.webp"
							alt=""
						/>
						<div className="p-5">
							<h5 className="breed-card-heading">British Shorthairs</h5>
							<p className="p-4">
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
							<p className="p-4">
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
							<p className="p-4">
								Ragdoll cats are social and happily spend time in the house of
								the owner and rarely wander out on their own. They love being
								with the owner, they yearn for attention and enjoy the company
								of people. They love being embraced by people and often snuggle
								up in their lap. They enjoy following their owners and doing
								what they are doing. Not only do they like people, but they also
								like other cats and other pets, including dogs. In fact, they
								even like strangers!
							</p>
						</div>
					</div>
				</div>
			</section>
			<HomeCarousel />
		</>
	);
};

export default Home;
