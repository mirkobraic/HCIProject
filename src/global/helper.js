const setItem = (key, item) => {
  if (typeof window === 'undefined') {
    return null
  }
  console.log("setItem " + item);
  localStorage.setItem(key, item)
}

const getItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  console.log("getItem " + item);
  return localStorage.getItem(item)
}

const removeItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  console.log("removeItem " + item);
  localStorage.removeItem(item)
}

export const myLocalStorage = {
  getItem,
  setItem,
  removeItem
} 