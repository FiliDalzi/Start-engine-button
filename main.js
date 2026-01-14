document.querySelectorAll("button.latch").forEach((button) => {
	button.addEventListener("click", () => {
		const { classList } = button;

		classList.toggle("on");
		setTimeout(() => {
			if (classList.contains("on")) {
				classList.add("vibrating");
			}
		}, 1000);

		if (!classList.contains("on")) {
			classList.remove("vibrating");
		}
	});
});

document.querySelectorAll("#color-picker input").forEach((input) => {
	input.addEventListener("change", () => {
		if (input.checked) {
			document
				.querySelector("button.start-stop")
				.style.setProperty("--color", input.value);
		}
	});
});