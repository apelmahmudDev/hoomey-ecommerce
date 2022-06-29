// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-circular-progressbar/dist/styles.css";

import type { AppProps } from "next/app";
import { ReactElement } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { StylesProvider, createGenerateClassName } from "@mui/styles";

import createEmotionCache from "../theme/createEmotionCache";
import "../styles/globals.css";
import { appTheme } from "../theme/theme";

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
	return (
		<CacheProvider value={emotionCache}>
			<StylesProvider generateClassName={generateClassName}>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={appTheme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</StylesProvider>
		</CacheProvider>
	);
}

export default MyApp;
