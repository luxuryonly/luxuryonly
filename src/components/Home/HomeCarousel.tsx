import { Carousel } from 'react-responsive-carousel';
import { photosForHomeAtBottom } from './homeCarouselPhotos';

export const HomeCarousel = () => (
	<Carousel
		className="max-w-screen-lg text-center mx-auto mb-12"
		showStatus={false}
		centerMode
		infiniteLoop
		dynamicHeight
	>
		{photosForHomeAtBottom.map(url => (
			<img src={url} key={url} alt="" />
		))}
	</Carousel>
);
