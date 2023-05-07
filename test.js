const fs = require('fs');
const path = require('path');

const [command, title, content] = process.argv.slice(2);

function init() {
  fs.writeFile('notes.json', '[]', (error) => {
    if (error) return console.error(error.message);
    return undefined;
  });
}

function create(title, content) {
  fs.access(path.resolve(__dirname, 'notes.json'), fs.constants.F_OK, (err) => {
    if (err) init();

    fs.readFile('notes.json', (error, data) => {
      if (error) return console.error(error.message);
      const notes = JSON.parse(data);
      notes.push({ title, content });
      const json = JSON.stringify(notes);

      fs.writeFile('notes.json', json, (error) => {
        if (error) return console.error(error.message);
        console.log('Заметка создана');
      });
    });
  });
}

function list() {
  fs.readFile(path.resolve(__dirname, 'notes.json'), (err, data) => {
    if (err) return console.log(err);
    const notes = JSON.parse(data);
    notes.forEach((note, index) => {
      console.log(`${index + 1} ${note.title}`);
    });
  });
}

function view() {
  fs.readFile(path.resolve(__dirname, 'notes.json'), (err, data) => {
    if (err) return console.error(err.message);
    const notes = JSON.parse(data);
    const note = notes.find((note) => note.title === title);
    if (!note) {
      console.log('Заметка не найдена');
    } else {
      console.log(note.content);
    }
    return;
  });
}
function remove() {
  fs.readFile('notes.json', (err, data) => {
    if (err) return console.error(err.message);
    let notes = JSON.parse(data);
    notes = notes.filter((note) => note.title !== title);
    const json = JSON.stringify(notes);
    fs.writeFile(path.resolve(__dirname, 'notes.json'), json, (err) => {
      if (err) return console.error(err.message);
      console.log('заметка удалена');
    });
    return undefined;
  });
}
switch (command) {
  case 'list':
    list();
    break;
  case 'view':
    view();
    break;
  case 'create':
    create(title, content);
    break;
  case 'remove':
    remove();
    break;
  default:
    console.log('Unknown command');
}
