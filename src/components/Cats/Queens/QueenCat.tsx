import { CatCarousel } from '../CatCarousel';

interface Props {
	catList: {
		name: string;
		birthday: string;
		color: string;
		images: string[];
	}[];
}

export const QueenCat = ({ catList }: Props) => {
	return (
		<>
			<section className="text-gray-600 body-font max-w-4xl mx-auto">
				{catList.map(({ name, birthday, images, color }, index) => (
					<div
						className={`container sm:mx-auto flex flex-col rounded-2xl
								sm:p-10 py-8 mb-10 sm:mb-14 items-center shadow-2xl
								${index % 2 === 0 ? 'bg-beige-400' : 'bg-beige-100'}`}
						key={Math.random()}
					>
						<div
							className={`lg:flex-grow md:w-1/2 flex flex-col
									md:justify-start md:text-left mb-8 md:mb-0 md:mt-7 items-center text-center
									`}
						>
							<h3 className="title-font text-beige-600 sm:text-4xl text-3xl mb-4 font-medium">
								{name}
							</h3>
							<p className="title-font sm:text-xl text-lg my-1 font-medium">
								{color}
							</p>
							<p className="title-font sm:text-xl text-lg mb-4 font-medium">
								{birthday}
							</p>
						</div>
						<div className="lg:max-w-lg lg:w-full w-5/6">
							<CatCarousel images={images} />
						</div>
					</div>
				))}
			</section>
		</>
	);
};
