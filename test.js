const { stdout, exit } = process;

const flag = process.argv[2];
const availableFlas = ['-d', '-f'];
process.on('exit', (code) => {
  if (code === 1) {
    stdout.write('start with "-d" or "-f" flag');
  } else {
    stdout.write('\nBye');
  }
});
if (!flag || !availableFlas.includes(flag)) {
  exit(1);
}
const value = flag === '-d' ? __dirname : __filename;
stdout.write(value);
exit();
