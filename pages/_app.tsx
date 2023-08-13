import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Layout from 'src/context/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Script
				src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"
				strategy="beforeInteractive"
			/>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
