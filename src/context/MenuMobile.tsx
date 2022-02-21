import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';

const MenuMobile = () => {
	const [isOpen, setOpen] = useState<boolean>(false);

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
		<div className="md:hidden">
			<Hamburger
				label="Show Menu"
				size={22}
				toggled={isOpen}
				toggle={setOpen}
				hideOutline={false}
				rounded
			/>
			{isOpen && (
				<ul className="text-center flex text-xl flex-col justify-center items-center nav-links animate-mobile animate-back-in">
					<img className="cherry-left" src="/cherryblossom2.webp" alt="" />
					<img
						className="mobile-background"
						src="/cherryblossom1.webp"
						alt=""
					/>

					<li onClick={handleClick}>
						<Link href="/">Home</Link>
					</li>
					<li onClick={handleClick}>
						<Link href="/about">About</Link>
					</li>
					<li onClick={handleClick}>
						<Link href="/kings">Kings</Link>
					</li>
					<li onClick={handleClick}>
						<Link href="/queens">Queens</Link>
					</li>
					<li onClick={handleClick}>
						<Link href="/kittens">Kittens</Link>
					</li>
					<li onClick={handleClick}>
						<Link href="/faq">FAQ</Link>
					</li>
					<li onClick={handleClick}>
						<Link href="/contact">Contact Us</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default MenuMobile;
