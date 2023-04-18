const billWidgets = document.querySelectorAll(".bill-widget");

// const calculateWidget = document.querySelector("#calculate-widget");
// const textWidget = document.querySelector("#text-widget");
// const radioWidget = document.querySelector("#radio-widget");
// const settingsWidget = document.querySelector("#settings-widget");

billWidgets.forEach((billWidget) => {
	const inputs = billWidget.querySelectorAll('input, textarea, button');
	
	inputs.forEach((input) => {
		// input.addEventListener('focus', () => {
		// 	billWidget.classList.add('widget-selected');
		// });

		// input.addEventListener('blur', () => {
		// 	billWidget.classList.remove('widget-selected');
		// });

		// billWidget.addEventListener('focusin', () => {
		// 	billWidget.classList.add('widget-selected');
		// });
		// billWidget.addEventListener('focusout', () => {
		// 	billWidget.classList.remove('widget-selected');
		// });

		billWidget.addEventListener('click', () => {
			billWidget.classList.add('widget-selected');
		});
		billWidget.addEventListener('blur', () => {
			billWidget.classList.remove('widget-selected');
		});
	});
});

document.addEventListener('click', (event) => {
	billWidgets.forEach((billWidget) => {
		if (billWidget.contains(event.target)) {
			return;
		}
		billWidget.classList.remove('widget-selected');
	});
});