// import { NavBar } from './NavBar/NavBar';
import { Navbar } from './Navbar/Navbar';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			{/* <link rel="icon" href="" /> */}
			{/* <link rel="shortcut icon" href="" /> */}
		</Head>
		<Navbar />
		<main id="main">{children}</main>
	</>
);

export default Layout;
