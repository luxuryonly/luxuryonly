import { Carousel } from 'react-responsive-carousel';

export function CatCarousel({ images }: { images: string[] }) {
	return (
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
}
