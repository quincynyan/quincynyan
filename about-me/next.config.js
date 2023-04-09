/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

const repo = "quincynyan";

if (isGithubActions) {
	// trim off `<owner>/`
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

	assetPrefix = `/${repo}/`;
	basePath = `/${repo}`;
}

const nextConfig = {
	assetPrefix: assetPrefix,
	basePath: basePath,
	reactStrictMode: true,
	images: {
		domains: [
			"metrics.lecoq.io",
			"github-readme-stats.vercel.app",
			"localhost"
		],
		formats: ["image/avif", "image/webp"],
		loader: "imgix",
		path: "",
		disableStaticImages: true,
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "metrics.lecoq.io",
				port: "",
				pathname: "/"
			},
			{
				protocol: "https",
				hostname: "github-readme-stats.vercel.app",
				port: "",
				pathname: "/"
			}
		]
	}
};

module.exports = nextConfig;
