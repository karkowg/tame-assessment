exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let reduced = '';
    let i = 0, k = 0;
    let x = str[0];
    while (i < str.length) {
      if (x === str[i] && k < amount) {
        reduced += x;
        k++;
      }
      else if (x !== str[i]) {
        x = str[i];
        reduced += x;
        k = 1;
      }
      i++;
    }
    return reduced;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }
    return revStr;
  }
};
