import { CatCarousel } from '../CatCarousel';

interface Props {
	catList: {
		name: string;
		birthday: string;
		description: string;
		color: string;
		images: string[];
	}[];
}

export const QueenCat = ({ catList }: Props) => {
	return (
		<>
			<section className="text-gray-600 body-font max-w-6xl mx-auto">
				{catList.map(
					({ name, birthday, description, images, color }, index) => (
						<div
							className={`container mx-auto flex flex-col px-5 rounded-2xl
								sm:p-10 py-8 mb-10 sm:mb-14 items-center md:items-start shadow-2xl
								${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse bg-beige-100'}`}
							key={Math.random()}
						>
							<div
								className={`lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start
									md:justify-start md:text-left mb-16 md:mb-0 md:mt-7 items-center text-center
									${index % 2 === 0 ? 'lg:pr-24 md:pr-16' : 'lg:pl-24 md:pl-16'}`}
							>
								<h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
									{name}
								</h3>
								<p className="title-font sm:text-xl text-lg my-1 font-medium">
									{color}
								</p>
								<p className="title-font sm:text-xl text-lg mb-4 font-medium">
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
		</>
	);
};
