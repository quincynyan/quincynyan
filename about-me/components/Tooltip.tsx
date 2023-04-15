import { useState, useEffect } from "react";

function Tooltip() {
	const [tooltipVisible, setTooltipVisible] = useState(false);

	useEffect(() => {
		if (tooltipVisible) {
			const timer = setTimeout(() => {
				setTooltipVisible(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [tooltipVisible]);

	const handleCopyClick = () => {
		setTooltipVisible(true);
		navigator.clipboard.writeText("<@920239961087807549>");
	};

	return (
		<span
			style={{
				position: "relative",
				display: "inline-block"
			}}
		>
			<span
				onClick={handleCopyClick}
				onMouseLeave={() => setTooltipVisible(false)}
			>
				<span
					className="discord-tag"
					aria-expanded="false"
					role="button"
				>
					@クインシー (小獅)#6822
				</span>
				{tooltipVisible && (
					// <div className="tooltip-33Jwqe tooltipTop-CgYHUZ tooltipGreen-cAApx5 tooltipDisablePointerEvents-3dgGo3">
					// 	<div
					// 		className="tooltipPointer-sMBQqe"
					// 		style={{ left: "50%" }}
					// 	></div>
					// 	<div className="tooltipContent-38tm3I">Copied!</div>
					// </div>

					// ===================

					// <div
					// 	className="theme-dark layer-2BGhQ8 disabledPointerEvents-cGr1My"
					// 	style={{
					// 		position: "absolute",
					// 		bottom: "100%",
					// 		left: "50%",
					// 		transform: "translateX(-50%) translateY(-50%)"
					// 	}}
					// >
					// 	<div
					// 		className="tooltip-33Jwqe tooltipTop-CgYHUZ tooltipGreen-cAApx5 tooltipDisablePointerEvents-3dgGo3"
					// 		style={{ opacity: 1, transform: "none" }}
					// 	>
					// 		<div
					// 			className="tooltipPointer-sMBQqe"
					// 			style={{ left: "calc(50% + 0px)" }}
					// 		></div>
					// 		<div className="tooltipContent-38tm3I">
					// 			<div>Copied!</div>
					// 		</div>
					// 	</div>
					// </div>

					<div className="tooltip-container">
						<div className="tooltip">
							<div className="tooltip-pointer"></div>
							<div className="tooltip-content">Copied!</div>
						</div>
					</div>
				)}
			</span>
		</span>
	);
}

export default Tooltip;
