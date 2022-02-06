import type { NextPage } from 'next';
import { KingCat } from 'src/components/Cats/Kings/KingCat';

const Kings: NextPage = () => {
	return (
		<section>
			<h1 className="main-heading">Kings</h1>
			<KingCat />
		</section>
	);
};

export default Kings;
