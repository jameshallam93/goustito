export const removeLocalStorageData = (): void => {
	window.localStorage.removeItem("token");
	window.localStorage.removeItem("username");
	window.localStorage.removeItem("token-expiry");
};