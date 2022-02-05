import { useState, useEffect } from 'react';
import Link from 'next/link';

import Hamburger from 'hamburger-react';

export const MenuMobile = ({ path }: { path: string }) => {
	const [isOpen, setOpen] = useState(false);
	const handleClick = () => setOpen(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			document.getElementById('main')!.style.filter =
				'blur(5px) brightness(0.7)';
		} else {
			document.body.style.overflow = 'visible';
			document.getElementById('main')!.style.filter = 'none';
		}
	});

	return (
		<>
			<Hamburger
				color="#f7bb50"
				label="Navigation Menu"
				toggled={isOpen}
				toggle={setOpen}
			/>
			{isOpen ? (
				<ul
					id="mobile-nav"
					className="nav-links animate-mobile animate-back-in"
				>
					<li
						onClick={handleClick}
						className={path === '/' ? 'active-nav' : 'nav-item'}
					>
						<Link href="/">Home</Link>
					</li>
					<li
						onClick={handleClick}
						className={path === '/' ? 'active-nav' : 'nav-item'}
					>
						<Link href="/">About Us</Link>
					</li>

					<li
						onClick={handleClick}
						className={path === '/' ? 'active-nav' : 'nav-item'}
					>
						<Link href="/">Kittens</Link>
					</li>

					<li
						onClick={handleClick}
						className={path === '/' ? 'active-nav' : 'nav-item'}
					>
						<Link href="/">Shipping</Link>
					</li>

					<li className={path === '/' ? 'active-nav' : 'nav-item'}>
						<Link href="/">FAQ</Link>
					</li>

					<li
						onClick={handleClick}
						className={path === '/' ? 'active-nav' : 'nav-item'}
					>
						<Link href="/">Contact Us</Link>
					</li>
				</ul>
			) : null}
		</>
	);
};
