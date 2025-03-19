export const loggedInCONST = "loggedin"

export const setLoggedInLocal = () => localStorage.setItem(loggedInCONST, true);

export const getLoggedInLocal = () => localStorage.getItem(loggedInCONST, true);

export const deleteLoggedInLocal = () => localStorage.removeItem(loggedInCONST);
