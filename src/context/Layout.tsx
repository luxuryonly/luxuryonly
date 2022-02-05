import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			{/* <link rel="icon" href="" /> */}
			{/* <link rel="shortcut icon" href="" /> */}
		</Head>
		<Navbar />
		<main id="main">{children}</main>
		<Footer />
	</>
);

export default Layout;
