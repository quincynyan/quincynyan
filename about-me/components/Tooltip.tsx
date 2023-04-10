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
		<div>
			<span
				onClick={handleCopyClick}
				onMouseLeave={() => setTooltipVisible(false)}
			>
				<span
					className="mention wrapper-1ZcZW- interactive"
					aria-expanded="false"
					role="button"
				>
					@クインシー (子獅)#6822
				</span>
				{tooltipVisible && (
					// <div className="tooltip-33Jwqe tooltipTop-CgYHUZ tooltipGreen-cAApx5 tooltipDisablePointerEvents-3dgGo3">
					// 	<div
					// 		className="tooltipPointer-sMBQqe"
					// 		style={{ left: "50%" }}
					// 	></div>
					// 	<div className="tooltipContent-38tm3I">Copied!</div>
					// </div>
					<div
						className="theme-dark layer-2BGhQ8 disabledPointerEvents-cGr1My"
						// style={{
						// 	position: "absolute",
						// 	bottom: 550.75,
						// 	left: 185
						// }}
					>
						<div
							className="tooltip-33Jwqe tooltipTop-CgYHUZ tooltipGreen-cAApx5 tooltipDisablePointerEvents-3dgGo3"
							style={{ opacity: 1, transform: "none" }}
						>
							<div
								className="tooltipPointer-sMBQqe"
								style={{ left: "calc(50% + 0px)" }}
							></div>
							<div className="tooltipContent-38tm3I">
								<div>Copied!</div>
							</div>
						</div>
					</div>
				)}
			</span>
		</div>
	);
}

export default Tooltip;
