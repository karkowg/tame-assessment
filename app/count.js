exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start);
    let i = start + 1;
    let timer = setInterval(() => {
      if (i <= end) {
        console.log(i);
        i++;
      }
    }, 100);

    return {
      cancel: () => clearInterval(timer)
    };
  }
};
