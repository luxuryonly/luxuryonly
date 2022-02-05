import Link from 'next/link';

export const NavItems = ({ path }: { path: string }) => {
	return (
		<ul className="nav-links">
			<li className={path === '/' ? 'active-nav' : 'nav-item'}>
				<Link href="/">Home</Link>
			</li>

			<li className={path === '/' ? 'active-nav' : 'nav-item'}>
				<Link href="/">About</Link>
			</li>

			<li className={path === '/' ? 'active-nav' : 'nav-item'}>
				<Link href="/">Kittens</Link>
			</li>

			<li className={path === '/' ? 'active-nav' : 'nav-item'}>
				<Link href="/">Shipping</Link>
			</li>

			<li className={path === '/' ? 'active-nav' : 'nav-item'}>
				<Link href="/">FAQ</Link>
			</li>

			<li className={path === '/' ? 'active-nav' : 'nav-item'}>
				<Link href="/">Contact Us</Link>
			</li>
		</ul>
	);
};
