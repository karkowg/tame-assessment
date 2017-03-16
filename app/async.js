exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData: function(url) {
    let prom = new Promise((resolve, reject) => {
      let names = [];
      let xhr = $.ajax(url);
      xhr.done((data) => {
        _.each(data.people, (obj) => names.push(obj.name));
      });

      setTimeout(() => resolve(names), 250);
    });

    prom.then((value) => value.sort());

    return prom;
  }
};
