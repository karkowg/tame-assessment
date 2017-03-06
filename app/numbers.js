exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    let str = num.toString(2);
    return parseInt(str[str.length - bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    return ('0' + num.toString(2)).slice(-8);
  },

  multiply: function(a, b) {
    return parseFloat((a * b).toPrecision(
      b.toString().replace('.', '').length - 1
    ));
  }
};
