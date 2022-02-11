import type { NextPage } from 'next';
import Link from 'next/link';
import Gallery from 'react-photo-gallery';
import { Carousel } from 'react-responsive-carousel';
import {
	availableKittens,
	mainKittens
} from 'src/components/Cats/Kittens/kittenPhotos';

const Kittens: NextPage = () => {
	return (
		<section className="lg:pt-10">
			<h1 className="main-heading">Available Kittens</h1>
			<p className="max-w-xl text-center mx-auto mb-8 sm:mb-10 px-5 text-base text-gray-700 md:text-lg">
				The kittens in this gallery are what we currently have available. For
				more information on how to adopt one or getting on our waiting list for
				a specific color, please call us at{' '}
				<span className="text-blue-600">
					<Link href="tel:240-515-6701">(240) 515-6701</Link>
				</span>
				.
			</p>
			<Carousel
				className="max-w-screen-md text-center mx-auto"
				autoPlay={true}
				centerMode={true}
				infiniteLoop={true}
				emulateTouch={true}
				interval={5000}
				dynamicHeight={true}
			>
				{availableKittens.map(url => (
					<img src={url} key={url} alt="" />
				))}
			</Carousel>
			<div className="mx-auto mt-12 md:mt-28 pt-1 md:pt-8 pb-20 bg-beige-100">
				<h3 className="main-heading">Previous Litters</h3>
				<p className="max-w-xl text-center mx-auto mb-8 sm:mb-10 px-5 text-base text-gray-700 md:text-lg">
					All our gorgeous kittens below are from past litters.
				</p>
				<div className="max-w-screen-2xl mx-auto">
					<Gallery margin={4} photos={mainKittens} />
				</div>
			</div>
		</section>
	);
};

export default Kittens;
