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
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 md:pb-24 md:pt-16 md:flex-row flex-col-reverse items-center pt-10">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<MainCarousel />
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center">
						<img src="/fulllogo.webp" alt="LuxuryOnly Logo" />
						<p className="my-8 leading-relaxed md:text-left text-center">
							Copper mug try-hard pitchfork pour-over freegan heirloom neutra
							air plant cold-pressed tacos poke beard tote bag. Heirloom echo
							park mlkshk tote bag selvage hot chicken authentic tumeric
							truffaut hexagon try-hard chambray.
						</p>
					</div>
				</div>
			</section>

			<section className="flex flex-col justify-center items-center md:flex-row mb-28 mt-10">
				<div class="max-w-md bg-white rounded-lg border border-gray-200 shadow-md m-5">
					<img
						class="rounded-t-lg"
						src="/Kittens/Landscape/kitten11.webp"
						alt=""
					/>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
								British Shorthairs
							</h5>
						</a>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
							error quod natus fugit, aperiam nihil commodi quam voluptate quo,
							dolore quos praesentium excepturi. Ducimus eos, esse, mollitia
							corrupti, doloremque voluptate nulla nemo animi velit obcaecati
							iusto atque non quam earum.
						</p>
					</div>
				</div>
				<div class="max-w-md bg-white rounded-lg border border-gray-200 shadow-md m-5">
					<a href="#">
						<img
							class="rounded-t-lg"
							src="/Kittens/Landscape/kitten10.webp"
							alt=""
						/>
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
								Ragdolls
							</h5>
						</a>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
							iusto blanditiis. Laudantium ad saepe facere enim inventore. Non
							voluptatibus exercitationem, eveniet deleniti laboriosam sint
							nostrum doloribus consequuntur pariatur placeat libero debitis. Et
							ab totam veritatis magni voluptas dolores pariatur nulla?
						</p>
					</div>
				</div>
				<div class="max-w-md bg-white rounded-lg border border-gray-200 shadow-md m-5">
					<a href="#">
						<img
							class="rounded-t-lg"
							src="/Kittens/Landscape/kitten9.webp"
							alt=""
						/>
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
								Scottish Folds
							</h5>
						</a>
						<p class="mb-3 font-normal text-gray-700 ">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
							ratione, tempore nihil laborum rerum quia maxime quibusdam
							commodi, aspernatur aut fugiat quos eveniet modi dolorum
							architecto deleniti repellat quae. Facilis perferendis sunt
							sapiente magni quo optio cupiditate voluptatibus dolorem ipsam!
						</p>
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
