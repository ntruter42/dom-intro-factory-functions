const highlightWidgets = document.querySelectorAll(".bill-widget");

highlightWidgets.forEach((highlightWidget) => {
	const inputs = highlightWidget.querySelectorAll('input, textarea, button');
	
	inputs.forEach((input) => {
		highlightWidget.addEventListener('click', () => {
			highlightWidget.classList.add('widget-selected');
		});
		highlightWidget.addEventListener('blur', () => {
			highlightWidget.classList.remove('widget-selected');
		});
	});
});

document.addEventListener('click', (event) => {
	highlightWidgets.forEach((highlightWidget) => {
		if (highlightWidget.contains(event.target)) {
			return;
		}
		highlightWidget.classList.remove('widget-selected');
	});
});