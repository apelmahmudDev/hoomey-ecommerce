import type { AppProps } from "next/app";
import { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { StylesProvider, createGenerateClassName } from "@mui/styles";
import createEmotionCache from "../theme/createEmotionCache";
import { appTheme } from "../theme/theme";

import "../styles/globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-circular-progressbar/dist/styles.css";

import { CTAPopup, NewsLetterPopup, PageLoading } from "../components/common";
import { wrapper } from "../store";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

interface IAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const generateClassName = createGenerateClassName({
	productionPrefix: "c",
});

function MyApp(props: IAppProps): ReactElement {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	return (
		<CacheProvider value={emotionCache}>
			<StylesProvider generateClassName={generateClassName}>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={appTheme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />

					{isLoading ? (
						<PageLoading />
					) : (
						<>
							<Component {...pageProps} />

							{/* popup - they are showing itself any time & any where on the whole applications*/}
							<NewsLetterPopup />
							<CTAPopup />
						</>
					)}
				</ThemeProvider>
			</StylesProvider>
		</CacheProvider>
	);
}

export default wrapper.withRedux(MyApp);
