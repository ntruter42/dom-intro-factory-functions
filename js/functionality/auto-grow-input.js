const autoGrowInputs = document.querySelectorAll(".auto-grow-input");

autoGrowInputs.forEach((autoGrowInput) => {
	autoGrowInput.addEventListener('input', () => {
		autoGrowInput.style.height = 'auto';
		autoGrowInput.style.height = (autoGrowInput.scrollHeight) + 'px';
	});
});