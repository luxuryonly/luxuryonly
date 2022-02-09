import type { NextPage } from 'next';
import Gallery from 'react-photo-gallery';
import { mainKittens } from 'src/components/Cats/Kittens/kittenPhotos';

const Kittens: NextPage = () => {
	return (
		<section>
			<h1 className="main-heading">Kittens</h1>
			<p className="max-w-xl text-center mx-auto mb-8 sm:mb-10 px-5 text-base text-gray-700 md:text-lg">
				All our gorgeous kittens below are from past or current liters. To know
				exactly what kittens we have available, please call us at (571)
				201-6369.
			</p>
			<div className="mx-auto max-w-screen-2xl">
				<Gallery margin={4} photos={mainKittens} />
			</div>
		</section>
	);
};

export default Kittens;
