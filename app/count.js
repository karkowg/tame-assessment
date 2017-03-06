exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timer = setTimeout(function() {
      for (let i=start; i < end + 1; i++) {
        setTimeout(function() {
          console.log(i);
        }, 100);
      }
    }, (end-start)*100);

    return {
      cancel: function() {
        clearTimeout(timer);
      }
    };
  }
};
