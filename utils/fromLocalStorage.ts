export default function fromLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    return localStorage?.getItem(key)
      ? JSON.parse(localStorage.getItem(key) as string)
      : null;
  }
}
