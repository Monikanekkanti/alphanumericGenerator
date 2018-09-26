const model = require('./model');

const alphaMap = {
	"0": "",
  "1": "",
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz"
};

const services = {
  async convertPhoneNumber(number) {
    if (model.resultExists(number)) {
      return model.getResults(number);
    }
    const numStr = number;
    const alphaNumericNums = [];
    // Tested this logic with recursive function way as well
    // they seem to scale at same rate, but the logic below is bit faster.
    // For example i tried with 8 nine's (9999999) and got results in 80 miliseconds with the code below
    // and 90 ms with recursive. When i added one more 9 now with nine 9's, logic below took 420 ms and
    // recursive took 480. So left the code with for loops and got rid of recursive.
    for(let i = numStr.length; i > 0; i--) {
      const char = numStr[i - 1];
      if (!alphaMap[char]) {
        continue;
      }    
      for(let j = 0, len = alphaNumericNums.length; j <= len; j++) {
        let alphaNum = alphaNumericNums[j];
        if(!alphaNum) { alphaNum = numStr; }
        const prePadStr = alphaNum.substr(0, i - 1);
        const postPadStr = alphaNum.substr(i, alphaNum.length);
        for(let k = 0; k < alphaMap[char].length; k++) {
          alphaNumericNums.push(`${prePadStr}${alphaMap[char][k]}${postPadStr}`);
        }
      }
    }
    // holding data in memory. careful with it as it impacts the performace of the app when 
    // memory starts growing.
    model.save(number, alphaNumericNums)
    return alphaNumericNums;
  },
};

module.exports = services;
