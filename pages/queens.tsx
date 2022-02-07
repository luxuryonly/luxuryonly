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

			<div className="flex justify-center rounded-md shadow-sm" role="group">
				<button
					type="button"
					onClick={() => setCurrentPage('british')}
					className={`py-3 px-5 text-sm font-medium text-gray-900
					bg-white rounded-l-lg border border-gray-200
					hover:bg-gray-100 hover:text-blue-700 focus:z-10
					focus:ring-2 focus:ring-blue-700 focus:text-blue-700
					${currentPage === 'british' && 'btn-active'}`}
				>
					British Shorthair
				</button>
				<button
					type="button"
					onClick={() => setCurrentPage('ragdoll')}
					className={`py-3 px-5 text-sm font-medium text-gray-900
					bg-white border-t border-b border-gray-200 hover:bg-gray-100
					hover:text-blue-700 focus:z-10 focus:ring-2
					focus:ring-blue-700 focus:text-blue-700
					${currentPage === 'ragdoll' && 'btn-active'}`}
				>
					Ragdoll
				</button>
				<button
					type="button"
					onClick={() => setCurrentPage('scottish')}
					className={`py-3 px-5 text-sm font-medium text-gray-900 bg-white
					rounded-r-md border border-gray-200 hover:bg-gray-100
					hover:text-blue-700 focus:z-10 focus:ring-2
					focus:ring-blue-700 focus:text-blue-700
					${currentPage === 'scottish' && 'btn-active'}`}
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
