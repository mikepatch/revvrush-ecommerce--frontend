import { useEffect, useRef, useCallback } from "react";

export const useDebounce = <T extends unknown[]>(
	callback: (...args: T) => void,
	delay: number,
): ((...args: T) => void) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	const debouncedCallback = useCallback(
		(...args: T) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay],
	);

	return debouncedCallback;
};
