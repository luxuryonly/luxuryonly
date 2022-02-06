import type { NextPage } from 'next';
import { QueenCat } from 'src/components/Cats/Queens/QueenCat';

const Queens: NextPage = () => {
	return (
		<section>
			<h1 className="main-heading">Queens</h1>
			<QueenCat />
		</section>
	);
};

export default Queens;
