exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    let prom = new Promise(function(resolve, reject) {

      setTimeout(function() {
        resolve(value);
      }, 250);
    });

    return prom;
  },

  manipulateRemoteData: function(url) {
    let prom = new Promise(function(resolve, reject) {
      let names = [];
      jQuery.ajax(url).done(function(data) {
        data.people.forEach(function(obj) {
          names.push(obj.name);
        });
      });

      setTimeout(function() {
        resolve(names);
      }, 250);
    });

    prom.then(function(value) {
      value.sort();
    });

    return prom;
  }
};
