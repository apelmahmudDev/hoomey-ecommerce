const Error = ({ width = 40, height = 40 }: { width?: number | string; height?: number | string }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56823 3.03617 8.69181 1.52242 12.3463C0.00866572 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM17.5167 10C17.5167 9.33696 17.7801 8.70107 18.2489 8.23223C18.7177 7.76339 19.3536 7.5 20.0167 7.5C20.6797 7.5 21.3156 7.76339 21.7844 8.23223C22.2533 8.70107 22.5167 9.33696 22.5167 10V21.4833C22.5167 21.8116 22.452 22.1367 22.3264 22.44C22.2007 22.7434 22.0166 23.019 21.7844 23.2511C21.5523 23.4832 21.2767 23.6674 20.9734 23.793C20.6701 23.9187 20.345 23.9833 20.0167 23.9833C19.6884 23.9833 19.3633 23.9187 19.06 23.793C18.7566 23.6674 18.4811 23.4832 18.2489 23.2511C18.0168 23.019 17.8326 22.7434 17.707 22.44C17.5813 22.1367 17.5167 21.8116 17.5167 21.4833V10ZM20 32.5C19.433 32.5 18.8788 32.3319 18.4074 32.0169C17.9359 31.7019 17.5685 31.2542 17.3515 30.7304C17.1346 30.2065 17.0778 29.6301 17.1884 29.0741C17.299 28.518 17.5721 28.0072 17.973 27.6063C18.3739 27.2054 18.8847 26.9324 19.4407 26.8217C19.9968 26.7111 20.5732 26.7679 21.097 26.9849C21.6208 27.2018 22.0686 27.5693 22.3836 28.0407C22.6985 28.5121 22.8667 29.0664 22.8667 29.6333C22.8667 30.3936 22.5646 31.1228 22.027 31.6604C21.4894 32.198 20.7603 32.5 20 32.5Z"
				fill="#FFBC59"
			/>
		</svg>
	);
};

export default Error;
