export const setToken = (token, value) => {
    const existToken = localStorage.getItem(value)
    if(existToken) {
        localStorage.removeItem(value);
        localStorage.setItem(value, token);
    } else {
        localStorage.setItem(value, token);
    }
}