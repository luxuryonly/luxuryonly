import { Carousel } from 'react-responsive-carousel';
import { photosForHomeAtBottom } from './homeCarouselPhotos';

export function HomeCarousel() {
	return (
		<Carousel
			className="max-w-screen-lg text-center mx-auto"
			autoPlay={true}
			centerMode={true}
			infiniteLoop={true}
			emulateTouch={true}
			showStatus={false}
			interval={4000}
			dynamicHeight={true}
		>
			{photosForHomeAtBottom.map(url => (
				<img src={url} key={url} alt="" />
			))}
		</Carousel>
	);
}
