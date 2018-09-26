let storeValues = {};

const model = {
  clearAllStoredValues() {
    storeValues = {};
    return;
  },

  getAllStoredNums() {
    return Object.keys(storeValues);
  },

  getResults(key) {
    return storeValues[key];
  },

  resultExists(key) {
    return !!storeValues[key];
  },

  save(key, value) {
    storeValues[key] = value;
    return true;
  },
};

module.exports = model;
