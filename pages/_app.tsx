import type { AppProps } from 'next/app';
import 'styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Layout from 'src/context/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
