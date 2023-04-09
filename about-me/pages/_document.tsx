import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.xz.style/serve/inter.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

