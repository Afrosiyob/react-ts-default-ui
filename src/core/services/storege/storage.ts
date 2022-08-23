export function setStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getStorage(key: string) {
  return localStorage.getItem(key);
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}
