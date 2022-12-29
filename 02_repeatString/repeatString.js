const repeatString = function(word, times) {
if (times < 0) return 'ERROR';

    let string = '';
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };

  repeatString('hey',3);
  repeatString('hey',10);
  repeatString('hey',1);
  repeatString('hey',0);
  repeatString('hey',10).match(/((hey))/g).length;
  repeatString('',3);

// Do not edit below this line
module.exports = repeatString;
