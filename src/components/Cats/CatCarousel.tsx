import { Carousel } from 'react-responsive-carousel';

export const CatCarousel = ({ images }: { images: string[] }) => (
	<Carousel
		className="max-w-screen-2xl text-center mx-auto"
		infiniteLoop={true}
		showStatus={false}
		showIndicators={false}
		dynamicHeight={true}
	>
		{images.map(url => (
			<img className="rounded-2xl" src={url} key={url} alt="" />
		))}
	</Carousel>
);
