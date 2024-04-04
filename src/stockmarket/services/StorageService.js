class StorageService {

    static set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    static get(key) {
      try {
        return JSON.parse(localStorage.getItem(key) || '');
      } catch (e) {
        return null;
      }
    }
  
    static remove(key) {
      localStorage.removeItem(key);
    }
  
    static clearAll() {
      localStorage.clear();
    }
  
  }
  
  export default StorageService;