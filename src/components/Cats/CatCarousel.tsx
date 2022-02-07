import { Carousel } from 'react-responsive-carousel';

export function CatCarousel({ images }: { images: string[] }) {
	return (
		<Carousel
			className="max-w-screen-2xl text-center mx-auto"
			infiniteLoop={true}
			emulateTouch={true}
			showStatus={false}
			showIndicators={false}
			dynamicHeight={true}
		>
			{images.map(url => (
				<img src={url} key={url} />
			))}
		</Carousel>
	);
}
