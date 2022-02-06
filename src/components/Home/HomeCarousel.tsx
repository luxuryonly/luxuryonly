import { Carousel } from 'react-responsive-carousel';
import { photosForHome } from './homeCarouselPhotos';

export function HomeCarousel() {
	return (
		<Carousel
			className="max-w-screen-2xl text-center mx-auto"
			autoPlay={true}
			centerMode={true}
			infiniteLoop={true}
			emulateTouch={true}
			showStatus={false}
			interval={4000}
		>
			{photosForHome.map(url => (
				<img src={url} key={Math.random()} />
			))}
		</Carousel>
	);
}
