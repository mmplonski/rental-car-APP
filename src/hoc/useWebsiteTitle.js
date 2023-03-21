import { useEffect } from 'react';

export default function useWebsiteTitle(title) {
	const setTitle = (title) => {
		document.title = title;
	};

	useEffect(() => {
		if (title) {
			setTitle(title);
		}
	}, [title]);

	return setTitle;
}
