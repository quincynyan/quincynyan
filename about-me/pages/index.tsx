import Head from "next/head";
import styles from "@/styles/Home.module.css";
import MyComponent from "../pages/myScript.js";
import Tooltip from "@/components/Tooltip";
import Image from "next/image";

export default function Home(): JSX.Element {
	return (
		<>
			<MyComponent />
			<Head>
				<title>QuincyNyan</title>
			</Head>
			<div
				className={`${styles.container} container-lg px-3 my-5 markdown-body`}
			>
				<header id="myHeader">
					<h1>
						<a href="https://quinc.nekonyan.fun/">quincynyan</a>
					</h1>
				</header>
				<ul className={`unol`}>
					<li className={`orl`}>
						👋 Hi there, I&#x2019;m QuincyNyan!
					</li>
					<li className={`orl`}>
						👀 I&#x2019;m interested in all things kawaii and fun
					</li>
					<li className={`orl`}>
						🌱 I&#x2019;m currently learning new coding tricks and
						techniques
					</li>
					<li className={`orl`}>
						💞️ I&#x2019;m looking to collaborate on cute projects
						(and maybe dates too 🥺💜)
					</li>
					<li className={`orl`}>
						📫 You can reach me at <Tooltip /> on Discord
					</li>
				</ul>

				<p className="para">
					I&apos;m just an ordinary gamer living in a cute little
					house on a cute little street in a cute little town in a
					cute little city in a cute little state in a cute little
					country on a cute little continent on a cute little planet
					in a cute little Solar System in a cute little galaxy in a
					cute little universe, playing an ordinary game called
					Minecraft.
				</p>

				<div className="para">
					<div className={styles.metrics}>
						<Image
							src="https://metrics.lecoq.io/quincynyan?template=classic&amp;repositories.forks=true&amp;isocalendar=1&amp;activity=1&amp;isocalendar.duration=half-year&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.filter=all&amp;activity.visibility=all&amp;activity.timestamps=false&amp;config.timezone=Asia%2FRangoon"
							alt="Metrics (Reload if you see this)"
							fill
							// width={480}
							// height={918}
							// unoptimized={true}
						/>
					</div>
				</div>

				<div className="para">
					<div className={styles.stats}>
						<Image
							src="https://github-readme-stats.vercel.app/api?username=quincynyan&amp;show_icons=true&amp;theme=dracula"
							alt="QuincyNyan's GitHub stats"
							fill
							// width={467}
							// height={195}
							// unoptimized={true}
						/>
						<Image
							src="https://github-readme-stats.vercel.app/api/top-langs/?username=quincynyan&amp;layout=compact&amp;langs_count=8"
							alt="Top Langs"
							fill
							// width={300}
							// height={190}
							// unoptimized={true}
						/>
					</div>
				</div>

				<p className="para">
					I mainly code in JavaScript, but I&apos;m currently learning
					Python too! My first language was Java, and I&apos;m looking
					forward to learning C++ in the future. Feel free to reach
					out to me and collaborate. DMs are always open, but
					don&apos;t expect me to be a coding expert. Even though
					I&apos;ve been coding for the past 3 years, I still consider
					myself a beginner, and I may need your help more than you
					need mine! XD
				</p>

				<p className="para">
					All of my repos are free to use. You can copy them,
					duplicate them, do whatever you want with them! If you need
					any help with my messy, dirty spaghetti code, just let me
					know! I&apos;m always happy to help (not because I&apos;m
					angry you&apos;re using my code without my permission, I
					really don&apos;t mind!). Welp, have a super cute day!
					😊🌸🌟
				</p>
			</div>
		</>
	);
}
