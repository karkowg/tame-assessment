exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    let regex = /[0-9]+/;
    return regex.test(str);
  },

  containsRepeatingLetter: function(str) {
    let regex = /([a-z])\1+/i;
    return regex.test(str);
  },

  endsWithVowel: function(str) {
    let regex = /[aeiou]$/i;
    return regex.test(str);
  },

  captureThreeNumbers: function(str) {
    let regex = /[0-9]{3}/;
    let pos = str.search(regex);
    return pos !== -1 ? str.substring(pos, pos+3) : false;
  },

  matchesPattern: function(str) {
    let regex = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/;
    return regex.test(str);
  },

  isUSD: function(str) {
    let regex = /^\$[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})?$/;
    return regex.test(str);
  }
};
