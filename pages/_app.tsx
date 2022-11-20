import { useEffect, useState } from "react";
import Head from "next/head";
import { appTheme } from "../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../theme/createEmotionCache";
import { StylesProvider, createGenerateClassName } from "@mui/styles";

import "../styles/globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-circular-progressbar/dist/styles.css";

import { PageLoading, Toastify, WarningPopup } from "../components/common";
import { ComponentWithLayoutProps } from "../types/page";
import FrontLayout from "../Layout/FrontLayout";
import { RootState, useAppSelector, wrapper } from "../store";
import useAuthCheck from "../hooks/useAuthCheck";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

const generateClassName = createGenerateClassName({
	productionPrefix: "c",
});

function MyApp(props: ComponentWithLayoutProps) {
	const isAuthCheck = useAuthCheck();
	const toastify = useAppSelector((state: RootState) => state.toastify);

	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	// @ts-ignore

	return !isAuthCheck ? (
		<PageLoading />
	) : (
		<CacheProvider value={emotionCache}>
			<StylesProvider generateClassName={generateClassName}>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>

				<ThemeProvider theme={appTheme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					{/* warning popup  */}
					<WarningPopup />
					{/* notifications after any action occuring*/}
					<Toastify isToastify={toastify.isToastify} severity={toastify.severity} desc={toastify.desc} />

					{isLoading ? (
						<PageLoading />
					) : Component.PageLayout ? (
						// @ts-ignore
						<Component.PageLayout>
							<Component {...pageProps} />
						</Component.PageLayout>
					) : (
						<FrontLayout>
							<Component {...pageProps} />
						</FrontLayout>
					)}
				</ThemeProvider>
			</StylesProvider>
		</CacheProvider>
	);
}

export default wrapper.withRedux(MyApp);
