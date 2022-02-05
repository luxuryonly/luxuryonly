import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import { photosForHome } from './homeCarouselPhotos';

export function HomeCarousel() {
	return (
		<Carousel
			className="max-w-screen-2xl text-center mx-auto"
			autoPlay={true}
			infiniteLoop={true}
			emulateTouch={true}
		>
			{photosForHome.map(({ url, title }) => (
				<div key={Math.random()}>
					<img src={url} />
					<p className="legend">{title}</p>
				</div>
			))}
		</Carousel>
	);
}
