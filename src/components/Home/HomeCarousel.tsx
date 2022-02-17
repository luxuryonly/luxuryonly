import { Carousel } from 'react-responsive-carousel';
import { photosForHomeAtBottom } from './homeCarouselPhotos';

export function HomeCarousel() {
	return (
		<Carousel
			className="max-w-screen-lg text-center mx-auto mb-12"
			centerMode={true}
			infiniteLoop={true}
			showStatus={false}
			dynamicHeight={true}
		>
			{photosForHomeAtBottom.map(url => (
				<img src={url} key={url} alt="" />
			))}
		</Carousel>
	);
}
