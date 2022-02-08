import { Carousel } from 'react-responsive-carousel';
import { photosForMain } from './homeCarouselPhotos';

export function MainCarousel() {
	return (
		<Carousel
			className="max-w-xl overflow-hidden text-center mx-auto rounded-2xl"
			autoPlay={true}
			infiniteLoop={true}
			interval={4000}
			showThumbs={false}
			showStatus={false}
			showIndicators={false}
		>
			{photosForMain.map(url => (
				<img src={url} key={Math.random()} />
			))}
		</Carousel>
	);
}
