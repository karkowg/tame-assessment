exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(name) {
      return str + ', ' + name;
    };
  },

  makeClosures: function(arr, fn) {
    return function(index) {
      return fn(arr[index]);
    };
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let sum = 0;
    for (let i=0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    let args = [];
    for (let i=1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    return function(args) {
      return fn.apply(this, args);
    };
  },

  curryIt: function(fn) {

  }
};
