import { useState, useCallback } from "react";

const useTogglable = (initialState: boolean): [boolean, any] => { //eslint-disable-line

	const [state, setState] = useState(initialState);
	const toggle = useCallback((): void => setState(!state), [state]);

	return [state, toggle];
};
export { useTogglable };