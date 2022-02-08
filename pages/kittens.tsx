import type { NextPage } from 'next';
import Gallery from 'react-photo-gallery';
import { CatCarousel } from 'src/components/Cats/CatCarousel';
import {
	mainKittens,
	kittensPortrait
} from 'src/components/Cats/Kittens/kittenPhotos';
const Kittens: NextPage = () => {
	return (
		<section>
			<h1 className="main-heading">Kittens</h1>
			<div className="mx-auto">
				{/* <CatCarousel images={kittensPortrait} /> */}
				{/* <CatCarousel images={mainKittens} /> */}
				<Gallery margin={4} photos={mainKittens} />
			</div>
		</section>
	);
};

export default Kittens;
