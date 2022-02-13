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
			<link rel="shortcut icon" href="/logo.webp" type="image/x-icon" />
			<title>Luxury Only Cattery</title>
		</Head>
		<Navbar />
		<main id="main">
			<img className="cherry-background" src="/cherryblossom1.webp" alt="" />
			{children}
		</main>
		<Footer />
	</>
);

export default Layout;
