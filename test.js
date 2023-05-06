const { stdin, stdout, stderr } = process;
stdin.on('data', (data) => stdout.write(data));
process.on('exit', (code) => {
  if (code === 0) {
    stdout.write('OK');
  } else {
    stderr.write(`Something get wrong! Programm end with code ${code}`);
  }
});
process.exit(55);
