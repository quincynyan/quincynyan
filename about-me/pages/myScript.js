import { useEffect } from "react";

function MyComponent() {
	useEffect(() => {
		// Add some cool effects to the header
		const header = document.querySelector("header");
		header.style.transition = "all 0.5s ease-in-out";
		const handleHeaderMouseEnter = () => {
			header.style.transform = "rotateX(360deg)";
		};
		const handleHeaderMouseLeave = () => {
			header.style.transform = "rotateX(0deg)";
		};
		header.addEventListener("mouseenter", handleHeaderMouseEnter);
		header.addEventListener("mouseleave", handleHeaderMouseLeave);

		// Add an animation to the "Learn More" button
		const learnMoreBtn = document.querySelector("#learn-more-btn");
		if (learnMoreBtn) {
			learnMoreBtn.style.transition = "all 0.3s ease-in-out";
			const handleLearnMoreBtnMouseEnter = () => {
				learnMoreBtn.style.backgroundColor = "#F6C358";
				learnMoreBtn.style.color = "#000";
				learnMoreBtn.style.transform = "scale(1.1)";
			};
			const handleLearnMoreBtnMouseLeave = () => {
				learnMoreBtn.style.backgroundColor = "#000";
				learnMoreBtn.style.color = "#FFF";
				learnMoreBtn.style.transform = "scale(1)";
			};
			learnMoreBtn.addEventListener(
				"mouseenter",
				handleLearnMoreBtnMouseEnter
			);
			learnMoreBtn.addEventListener(
				"mouseleave",
				handleLearnMoreBtnMouseLeave
			);
		}

		// Add a scrolling effect to the page
		const sections = document.querySelectorAll("section");
		if (sections.length === 0) return;
		let currentSectionIndex = 0;
		let isScrolling = false;

		const handleWheel = (event) => {
			if (isScrolling) return;
			isScrolling = true;

			setTimeout(() => {
				isScrolling = false;
			}, 1000);

			const direction = event.deltaY > 0 ? 1 : -1;
			if (direction === 1 && currentSectionIndex < sections.length - 1) {
				currentSectionIndex++;
			} else if (direction === -1 && currentSectionIndex > 0) {
				currentSectionIndex--;
			}

			sections[currentSectionIndex].scrollIntoView({
				behavior: "smooth"
			});
		};

		document.addEventListener("wheel", handleWheel);

		// Return a cleanup function to remove event listeners
		return () => {
			header.removeEventListener("mouseenter", handleHeaderMouseEnter);
			header.removeEventListener("mouseleave", handleHeaderMouseLeave);
			if (learnMoreBtn) {
				learnMoreBtn.removeEventListener(
					"mouseenter",
					handleLearnMoreBtnMouseEnter
				);
				learnMoreBtn.removeEventListener(
					"mouseleave",
					handleLearnMoreBtnMouseLeave
				);
			}
			document.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return null;
}

export default MyComponent;
