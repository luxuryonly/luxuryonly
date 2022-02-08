import type { NextPage } from 'next';
import { CatCarousel } from 'src/components/Cats/CatCarousel';
import {
	mainKittens,
	kittensPortrait
} from 'src/components/Cats/Kittens/kittenPhotos';
const Kittens: NextPage = () => {
	return (
		<section>
			<h1 className="main-heading">Kittens</h1>
			<div className="mx-auto max-w-2xl">
				<CatCarousel images={kittensPortrait} />
				<CatCarousel images={mainKittens} />
			</div>
		</section>
	);
};

export default Kittens;
