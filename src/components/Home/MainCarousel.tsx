import { Carousel } from 'react-responsive-carousel';
import { photosForMain } from './homeCarouselPhotos';

export const MainCarousel = () => (
	<Carousel
		className="max-w-lg overflow-hidden text-center mx-auto rounded-2xl"
		autoPlay
		infiniteLoop
		interval={4000}
		showThumbs={false}
		showStatus={false}
		showIndicators={false}
	>
		{photosForMain.map(url => (
			<img src={url} key={url} alt="" />
		))}
	</Carousel>
);
