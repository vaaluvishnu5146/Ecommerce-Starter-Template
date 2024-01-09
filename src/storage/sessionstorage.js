export function setSessionStorageData(key, data) {
  try {
    sessionStorage.setItem(key, data);
  } catch (error) {
    console.error(error);
  }
}
