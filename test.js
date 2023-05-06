const { stdin, stdout } = process;
stdout.write('Enter your name \n');
stdin.on('data', (name) => {
  stdout.write(`Hello, ${name}`);
  process.exit();
});
process.on('exit', () => {
  stdout.write('Goodbye');
});
