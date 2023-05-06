const { stdin, stdout, exit } = process;

stdout.write('Enter your name ');
stdin.on('data', (name) => {
  const nameStr = name.toString().split('').reverse().join('');
  stdout.write(`\nYour reverse name is: ${nameStr}`);
  exit();
});
process.on('exit', () => {
  stdout.write('\nGoodluck!');
});

// const { stdin, stdout } = process;

// stdout.write('Как тебя зовут?\n');
// stdin.on('data', (data) => {
//   const name = data.toString();
//   const reverseName = name.split('').reverse().join('');
//   stdout.write(`\nТвоё имя наоборот ${reverseName}`);
//   process.exit();
// });
