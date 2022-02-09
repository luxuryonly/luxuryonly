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
			<p className="max-w-md mx-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
				voluptates fugit rem animi corporis omnis, recusandae nemo nihil ab
				inventore dignissimos quos eaque maiores libero delectus, sed quidem
				officia tenetur iste! Rerum, voluptas officiis! Corporis ab delectus
				laboriosam provident nesciunt tempore ipsum, quod quia cupiditate odio
				facere. Ratione, libero! Deleniti.
			</p>
			<div className="mx-auto max-w-screen-2xl">
				{/* <CatCarousel images={kittensPortrait} /> */}
				{/* <CatCarousel images={mainKittens} /> */}
				<Gallery margin={4} photos={mainKittens} />
			</div>
		</section>
	);
};

export default Kittens;
