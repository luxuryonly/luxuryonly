import type { NextPage } from 'next';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import {
	availableKittens,
	britishKittens,
	ragdollKittens,
	scottishKittens
} from 'src/components/Cats/Kittens/kittenPhotos';
import { TEL_NUM_FORM, TEL_NUM_VIEW } from 'src/config/constants';

const Kittens: NextPage = () => (
	<section className="lg:pt-10">
		<h1 className="main-heading">Available Kittens</h1>
		<p className="max-w-xl text-center mx-auto mb-8 sm:mb-10 px-5 text-base text-gray-700 md:text-lg">
			The kittens in this gallery are what we currently have available. For more
			information on how to adopt one or getting on our waiting list for a
			specific color, please call us at{' '}
			<span className="text-blue-600">
				<Link href={`tel:${TEL_NUM_FORM}`}>{TEL_NUM_VIEW}</Link>
			</span>
			.
		</p>
		<Carousel
			className="max-w-screen-md text-center mx-auto"
			interval={5000}
			autoPlay
			centerMode
			infiniteLoop
			emulateTouch
			dynamicHeight
		>
			{availableKittens.map(url => (
				<img src={url} key={url} alt="" />
			))}
		</Carousel>
		<div className="mx-auto mt-12 md:mt-28 pt-1 md:pt-8 pb-20 bg-beige-100">
			<h3 className="main-heading">Previous Litters</h3>
			<p className="max-w-[37em] text-center mx-auto mb-8 sm:mb-10 px-5 text-base text-gray-700 md:text-lg">
				All our gorgeous kittens below are from past litters. To know exactly
				what kittens we have available, please call at{' '}
				<span className="text-blue-600">
					<Link href={`tel:${TEL_NUM_FORM}`}>{TEL_NUM_VIEW}</Link>
				</span>
				.
			</p>
			<h4 className="kitten-heading pt-6">British Shorthairs</h4>
			<Carousel
				className="max-w-screen-md text-center mx-auto pb-14"
				interval={5000}
				centerMode
				infiniteLoop
				emulateTouch
				dynamicHeight
			>
				{britishKittens.map(url => (
					<img src={url} key={url} alt="" />
				))}
			</Carousel>
			<h4 className="kitten-heading">Scottish Folds & Straights</h4>
			<Carousel
				className="max-w-screen-md text-center mx-auto pb-14"
				interval={5000}
				centerMode
				infiniteLoop
				emulateTouch
				dynamicHeight
			>
				{scottishKittens.map(url => (
					<img src={url} key={url} alt="" />
				))}
			</Carousel>
			<h4 className="kitten-heading">Ragdolls</h4>
			<Carousel
				className="max-w-screen-md text-center mx-auto pb-14"
				interval={5000}
				centerMode
				infiniteLoop
				emulateTouch
				dynamicHeight
			>
				{ragdollKittens.map(url => (
					<img src={url} key={url} alt="" />
				))}
			</Carousel>
		</div>
	</section>
);

export default Kittens;
