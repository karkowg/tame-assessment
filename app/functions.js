exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return (name) => str + ', ' + name;
  },

  makeClosures: function(arr, fn) {
    let funcs = [];
    arr.forEach((current) => funcs.push(() => fn(current)));
    return funcs;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let sum = 0;
    _.each(arguments, (arg) => sum += arg);
    return sum;
  },

  callIt: function(fn) {
    let args = [];
    _.each(arguments, (arg, k) => {
      if (k > 0) args.push(arg);
    });
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    let selfArgs = [];
    _.each(arguments, (arg, k) => {
      if (k > 0) selfArgs.push(arg);
    });
    return () => {
      let args = [];
      _.each(arguments, (arg) => selfArgs.push(arg));
      return fn.apply(this, selfArgs.concat(args));
    };
  },

  curryIt: function(fn) {
    return (a) => (b) => (c) => fn(a, b, c);
  }
};
