import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			<link
				rel="stylesheet"
				href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css"
			/>
		</Head>
		<Navbar />
		<main id="main">{children}</main>
		<Footer />
	</>
);

export default Layout;
