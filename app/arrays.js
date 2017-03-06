exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(total, current) {
      return total + current;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function(current) {
      return current != item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function(current) {
      return current == item;
    }).length;
  },

  duplicates: function(arr) {
    arr.sort();
    return arr.filter(function(current, index, origArr) {
      if (index == 0) return true;
      return current != origArr[index - 1]
        && exports.arraysAnswers.count(origArr, current) > 1;
    });
  },

  square: function(arr) {
    return arr.map(function(current) {
      return current * current;
    });
  },

  findAllOccurrences: function(arr, target) {
    let auxArr = [];
    arr.forEach(function(current, index) {
      if (current == target) {
        auxArr.push(index);
      }
    });
    return auxArr;
  }
};
