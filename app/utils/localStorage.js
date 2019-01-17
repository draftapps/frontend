export function storeInLocalStorage({ label, value }) {
  localStorage.setItem(label, value);
}

export function retrieveFromLocalStorage(item) {
  return localStorage.getItem(item);
}

export function removeFromLocalStorage(item) {
  return localStorage.removeItem(item);
}
