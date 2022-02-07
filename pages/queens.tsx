import type { NextPage } from 'next';
import { QueenCat } from 'src/components/Cats/Queens/QueenCat';
import { britishQueenList } from 'src/components/Cats/Queens/britishQueenList';
import { scottishQueenList } from 'src/components/Cats/Queens/scottishQueenList';
import { ragdollsQueenList } from 'src/components/Cats/Queens/ragdollsQueenList';
import { useState } from 'react';

type QueensBreed = 'british' | 'scottish' | 'ragdoll';

const Queens: NextPage = () => {
	const [currentPage, setCurrentPage] = useState<QueensBreed>('british');

	return (
		<section>
			<h1 className="main-heading">Queens</h1>
			<div className="btn-group justify-center mb-12">
				<button
					onClick={() => setCurrentPage('british')}
					className={`btn btn-outline ${
						currentPage === 'british' && 'btn-active'
					}`}
				>
					British Shorthair
				</button>
				<button
					onClick={() => setCurrentPage('ragdoll')}
					className={`btn btn-outline ${
						currentPage === 'ragdoll' && 'btn-active'
					}`}
				>
					Ragdoll
				</button>
				<button
					onClick={() => setCurrentPage('scottish')}
					className={`btn btn-outline ${
						currentPage === 'scottish' && 'btn-active'
					}`}
				>
					Scottish Fold
				</button>
			</div>
			{currentPage === 'british' ? (
				<QueenCat catList={britishQueenList} />
			) : null}
			{currentPage === 'scottish' ? (
				<QueenCat catList={scottishQueenList} />
			) : null}
			{currentPage === 'ragdoll' ? (
				<QueenCat catList={ragdollsQueenList} />
			) : null}
		</section>
	);
};

export default Queens;
