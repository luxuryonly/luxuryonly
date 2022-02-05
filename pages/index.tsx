import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<img
							className="object-cover object-center rounded"
							alt="hero"
							src="https://dummyimage.com/720x600"
						/>
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Before they sold out
							<br className="hidden lg:inline-block" />
							readymade gluten
						</h1>
						<p className="mb-8 leading-relaxed">
							Copper mug try-hard pitchfork pour-over freegan heirloom neutra
							air plant cold-pressed tacos poke beard tote bag. Heirloom echo
							park mlkshk tote bag selvage hot chicken authentic tumeric
							truffaut hexagon try-hard chambray.
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Button
							</button>
							<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
								Button
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex flex-col">
					<div className="lg:w-4/6 mx-auto">
						<div className="rounded-lg h-64 overflow-hidden">
							<img
								alt="content"
								className="object-cover object-center h-full w-full"
								src="https://dummyimage.com/1200x500"
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
										Phoebe Caulfield
									</h2>
									<div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
									<p className="text-base">
										Raclette knausgaard hella meggs normcore williamsburg enamel
										pin sartorial venmo tbh hot chicken gentrify portland.
									</p>
								</div>
							</div>
							<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
								<p className="leading-relaxed text-lg mb-4">
									Meggings portland fingerstache lyft, post-ironic fixie man bun
									banh mi umami everyday carry hexagon locavore direct trade art
									party. Locavore small batch listicle gastropub farm-to-table
									lumbersexual salvia messenger bag. Coloring book flannel
									truffaut craft beer drinking vinegar sartorial, disrupt
									fashion axe normcore meh butcher. Portland 90's scenester
									vexillologist forage post-ironic asymmetrical, chartreuse
									disrupt butcher paleo intelligentsia pabst before they sold
									out four loko. 3 wolf moon brooklyn.
								</p>
								<a className="text-indigo-500 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default Home;
