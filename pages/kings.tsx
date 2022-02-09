import type { NextPage } from 'next';
import { CatCarousel } from 'src/components/Cats/CatCarousel';
import { kingList } from 'src/components/Cats/Kings/kingList';

const Kings: NextPage = () => {
	return (
		<section className="max-w-6xl mx-auto">
			<h1 className="main-heading">Kings</h1>
			{kingList.map(
				({ name, birthday, description, images, breed, color }, index) => (
					<div
						className={`container sm:mx-auto flex flex-col px-5 rounded-2xl
						py-8 sm:p-10 mb-10 sm:mb-14 items-center md:items-start shadow-2xl
						text-gray-600 ${
							index % 2 === 0
								? 'md:flex-row bg-beige-400'
								: 'md:flex-row-reverse bg-beige-100'
						}`}
						key={Math.random()}
					>
						<div
							className={`lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start
								md:justify-start md:text-left mb-16 md:mb-0 md:mt-7 items-center text-center
								${index % 2 === 0 ? 'lg:pr-24 md:pr-16' : 'lg:pl-24 md:pl-16'}`}
						>
							<h3 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-beige-600">
								{name}
							</h3>
							<h4 className="title-font sm:text-2xl text-xl my-2 font-medium">
								{breed}
							</h4>
							<p className="title-font sm:text-xl text-lg my-1 font-medium">
								{color}
							</p>
							<p className="title-font sm:text-xl text-lg mb-2 mt-1 font-medium">
								{birthday}
							</p>
							<p className="md:mb-16 leading-relaxed">{description}</p>
						</div>
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
							<CatCarousel images={images} />
						</div>
					</div>
				)
			)}
		</section>
	);
};

export default Kings;
