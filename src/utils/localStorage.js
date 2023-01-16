export const getItem = (item) => {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem(item));
  }
};

export const setItem = (item, value) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(item, JSON.stringify(value));
  }
};

export const removeItem = (item) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(item);
  }
};
