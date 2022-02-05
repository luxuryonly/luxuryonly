import { useRouter } from 'next/router';
import Link from 'next/link';

import { useMobile } from '../../hooks/useMobile';
import { MenuMobile } from './MenuMobile';
import { NavItems } from './NavItems';
import { DarkModeToggle } from 'src/helpers/DarkModeToggle';

export const Navbar = () => {
	const { asPath: path } = useRouter();

	const isMobile = useMobile();
	return (
		<header className=" flex justify-between items-center mx-auto w-11/12 h-16">
			<div>Luxury Only</div>
			<p>760-222-2222</p>
			<nav className="flex justify-between items-center">
				{!isMobile ? <NavItems path={path} /> : <MenuMobile path={path} />}
			</nav>
		</header>
	);
};
