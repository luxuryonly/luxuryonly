import { CatCarousel } from '../CatCarousel';
import { kingContentList } from './kingContentList';

export const KingCat = () => {
	return (
		<>
			<section className="text-gray-600 body-font max-w-6xl mx-auto">
				{kingContentList.map(({ name, birthday, description, images }) => (
					<div
						className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
						key={Math.random()}
					>
						<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
							<h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
								{name}
							</h3>
							<p className="title-font sm:text-xl text-lg mb-4 font-medium text-gray-900">
								{birthday}
							</p>
							<p className="mb-8 leading-relaxed">{description}</p>
							<div className="flex justify-center">
								<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
									Button
								</button>
								<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
									Button
								</button>
							</div>
						</div>
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
							<CatCarousel images={images} />
						</div>
					</div>
				))}
			</section>
		</>
	);
};
