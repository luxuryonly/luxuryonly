import { Carousel } from 'react-responsive-carousel';

export const CatCarousel = ({ images }: { images: string[] }) => (
	<Carousel
		className="max-w-screen-2xl text-center mx-auto"
		infiniteLoop
		dynamicHeight
		showStatus={false}
		showIndicators={false}
	>
		{images.map(url => (
			<img className="rounded-2xl" src={url} key={url} alt="" />
		))}
	</Carousel>
);
