export const openGlobalSearch = (searchTerm?: string) => {
	// Starlight's built-in <site-search> component exposes a stable
	// `[data-open-modal]` trigger button regardless of which search provider
	// (Pagefind by default) backs it.
	const searchButton = document.querySelector(
		"site-search button[data-open-modal]",
	) as HTMLButtonElement | null;

	if (searchButton) {
		searchButton.click();

		if (searchTerm) {
			// Wait for the dialog (and Pagefind's UI) to mount, then set the term.
			setTimeout(() => {
				const searchInput = document.querySelector(
					"site-search input[type=text]",
				) as HTMLInputElement | null;

				if (searchInput) {
					searchInput.value = searchTerm;
					searchInput.focus();
					searchInput.dispatchEvent(new Event("input", { bubbles: true }));
				}
			}, 100);
		}
	}
};
