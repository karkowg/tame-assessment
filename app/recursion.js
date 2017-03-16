exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let self = this;
    let files = [];
    let dir = data.dir;
    let subdir = (dirName === undefined) ? dir : dirName;
    data.files.forEach(function(obj) {
      if (obj.hasOwnProperty('dir')) {
        files = files.concat(self.listFiles(obj));
      }
      else if (dir === subdir) files.push(obj);
    });

    return files;
},

  permute: function(arr) {

  },

  fibonacci: function(n) {
    if (n < 2) return n;
    return this.fibonacci(n-1) + this.fibonacci(n-2);
  },

  validParentheses: function(n) {

  }
};
