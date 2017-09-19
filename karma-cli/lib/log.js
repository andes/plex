exports.fatal = function (message, code) {
  /* eslint-disable no-console */
  console.error(message)
  process.exit(code)
};

exports.log = function (message) 
/* eslint-disable no-console */{
  console.log(message)
  process.exit()
};
