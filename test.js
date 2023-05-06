const { stdout } = process;

// const flagIndex = process.argv.indexOf('-m');
// if (flagIndex !== -1) {
//   const message = process.argv[flagIndex + 1];
//   stdout.write(message);
// }

// function getValue(flag) {
//   const flagIndex = process.argv.indexOf(flag);
//   return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
// }
// stdout.write(getValue('-m'));

// const protoObj = {
//   sayHi() {
//     stdout.write('Hi!');
//   },
// };

// const obj = {};
// obj.__proto__ = protoObj;
// obj.sayHi();

const productionMode = process.env.PRODUCTION === 'true';
if (productionMode) {
  stdout.write('Application is running in production mode');
} else {
  stdout.write('Application is running in development mode');
}
