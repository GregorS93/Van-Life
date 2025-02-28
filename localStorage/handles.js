export const setLoggedInLocal = () => localStorage.setItem("loggedin", true);

export const getLoggedInLocal = () => localStorage.getItem("loggedin", true);

export const deleteLoggedInLocal = () => localStorage.removeItem("loggedin");
