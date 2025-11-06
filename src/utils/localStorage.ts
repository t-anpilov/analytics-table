export const saveToLocalStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = <T>(key: string, fallback: T): T => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
};

export const removeFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};
